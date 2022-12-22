import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { GetNpmCountDto } from './dto/get-npm-count.dto';

@Injectable()
export class NpmCountService {
  getNpmCount(dto: GetNpmCountDto) {
    return { data: dto };
  }
}
