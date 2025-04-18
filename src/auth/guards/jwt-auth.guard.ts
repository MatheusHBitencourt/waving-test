// ✅ Guard que usa a estratégia JWT configurada para proteger rotas
import { AuthGuard } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}
