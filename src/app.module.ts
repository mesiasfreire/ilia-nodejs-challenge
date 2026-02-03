import { Module } from '@nestjs/common';
import { EndpointModule } from './api/endpoints/endpoint.module';

@Module({
  imports: [EndpointModule],
})
export class AppModule {}
