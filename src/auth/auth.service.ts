import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service'; // ou o service do seu banco

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email, password },
    });

    if (!user?.id) throw new UnauthorizedException('Usuário não encontrado');

    const isMatch = password === user.password;

    if (!isMatch) throw new UnauthorizedException('Senha inválida');

    return user;
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
    address: string,
  ) {
    const user = await this.prisma.user.create({
      data: { name, email, password, address },
    });

    await this.prisma.shoppingCart.create({ data: { userId: user.id } });

    return user;
  }

  generateToken(user: any, res: Response) {
    const payload = { sub: user.id, email: user.email };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    // Setar os cookies
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 15, // 15 minutos
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return { message: 'Login realizado com sucesso' };
  }
}
