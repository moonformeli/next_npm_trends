import { Controller, Get, Param, Query } from '@nestjs/common';
import { NpmCountService } from './npm-count.service';
import { GetNpmCountDto } from './dto/get-npm-count.dto';

@Controller('npm-count')
export class NpmCountController {
  constructor(private readonly npmCountService: NpmCountService) {}

  @Get(':name')
  async getDownloadCount(
    @Param('packageName') packageName: GetNpmCountDto['packageName'],
    @Query() query: Pick<GetNpmCountDto, 'startDate' | 'endDate'>,
  ) {
    const dto: GetNpmCountDto = {
      packageName,
      ...query,
    };

    return this.npmCountService.getNpmCount(dto);
  }
}
