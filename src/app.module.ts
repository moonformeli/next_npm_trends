import { Module } from '@nestjs/common';
import { DownloadCountModule } from './download-count/download-count.module';

@Module({
  imports: [DownloadCountModule],
})
export class AppModule {}
