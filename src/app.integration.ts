import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppIntegration {
  constructor(private readonly httpService: HttpService) {}
}
