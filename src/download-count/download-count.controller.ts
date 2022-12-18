import { Controller, Get, Param, Query } from '@nestjs/common';
import { DownloadCountService } from './download-count.service';
import { GetDownloadCountDto } from './dto/get-download-count.dto';

@Controller('download-count')
export class DownloadCountController {
  constructor(private readonly downloadCountService: DownloadCountService) {}

  @Get(':name')
  async getDownloadCount(
    @Param('name') name: GetDownloadCountDto['name'],
    @Query() query: Pick<GetDownloadCountDto, 'startDate' | 'endDate'>,
  ) {
    const dto: GetDownloadCountDto = {
      name,
      ...query,
    };

    return this.downloadCountService.getDownloadCount(dto);
  }
}
