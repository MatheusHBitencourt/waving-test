import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AppIntegration } from './app.integration';
import { AppRepository } from './app.repository';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, AppIntegration, AppRepository, PrismaService],
})
export class AppModule {}
