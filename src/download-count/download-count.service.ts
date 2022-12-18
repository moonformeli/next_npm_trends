import { Injectable } from '@nestjs/common';
import { GetDownloadCountDto } from './dto/get-download-count.dto';

@Injectable()
export class DownloadCountService {
  getDownloadCount(getDownloadCountDto: GetDownloadCountDto) {
    return { data: getDownloadCountDto };
  }
}
