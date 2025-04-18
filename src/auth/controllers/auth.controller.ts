// ✅ Controlador com login e rota protegida
import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Response, Request } from 'express';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('refresh')
  async refreshAccessToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies?.refresh_token;

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token não encontrado');
    }

    try {
      const payload = this.jwtService.verify(refreshToken);

      // Gera novo access token com mesmo payload
      const newAccessToken = this.jwtService.sign(
        { sub: payload.sub, email: payload.email },
        {
          expiresIn: '15m',
        },
      );

      // Atualiza cookie
      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: false, // true em produção
        sameSite: 'lax',
        maxAge: 1 * 1000,
      });

      return { message: 'Access token renovado com sucesso' };
    } catch (err) {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }
  }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.validateUser(body.email, body.password);

    const token = this.authService.generateToken(user, res);

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
    });

    return { user };
  }

  @Post('register')
  async register(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      address: string;
    },
  ) {
    const user = await this.authService.registerUser(
      body.name,
      body.email,
      body.password,
      body.address,
    );

    return { user };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
