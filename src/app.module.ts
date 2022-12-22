import { Module } from '@nestjs/common';
import { DownloadCountModule } from './npm-count/npm-count.module';

@Module({
  imports: [DownloadCountModule],
})
export class AppModule {}
