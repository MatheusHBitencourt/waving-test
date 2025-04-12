import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppRepository {
  constructor(private readonly prisma: PrismaService) {}
}
