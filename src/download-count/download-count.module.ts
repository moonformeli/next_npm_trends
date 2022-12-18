import { Module } from '@nestjs/common';
import { DownloadCountService } from './download-count.service';
import { DownloadCountController } from './download-count.controller';

@Module({
  controllers: [DownloadCountController],
  providers: [DownloadCountService]
})
export class DownloadCountModule {}
