import { Injectable, Logger } from '@nestjs/common';
import { GetNpmCountDto } from './dto/get-npm-count.dto';
import NpmCounter from 'src/api/NpmCounter';

@Injectable()
export class NpmCountService {
  npmCounter: NpmCounter = new NpmCounter();

  async getNpmCount(dto: GetNpmCountDto) {
    const res = await this.npmCounter.getNpmCount(dto, GetNpmCountDto);
    const { data, isError, error } = res;

    if (isError) {
      new Logger().log(data);
      new Logger().log(error);
    } else {
      new Logger().log(data);
      new Logger().log(error);
    }
    return { data: dto };
  }
}
