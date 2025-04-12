import { Injectable } from '@nestjs/common';
import { AppIntegration } from './app.integration';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly integration: AppIntegration,
    private readonly repository: AppRepository,
  ) {}
}
