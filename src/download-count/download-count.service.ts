import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { GetDownloadCountDto } from './dto/get-download-count.dto';

@Injectable()
export class DownloadCountService {
  getDownloadCount(dto: GetDownloadCountDto) {
    return { data: dto };
  }
}
