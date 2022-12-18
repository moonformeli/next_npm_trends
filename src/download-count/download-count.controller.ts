import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DownloadCountService } from './download-count.service';
import { CreateDownloadCountDto } from './dto/create-download-count.dto';
import { UpdateDownloadCountDto } from './dto/update-download-count.dto';

@Controller('download-count')
export class DownloadCountController {
  constructor(private readonly downloadCountService: DownloadCountService) {}

  @Post()
  create(@Body() createDownloadCountDto: CreateDownloadCountDto) {
    return this.downloadCountService.create(createDownloadCountDto);
  }

  @Get()
  findAll() {
    return this.downloadCountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.downloadCountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDownloadCountDto: UpdateDownloadCountDto) {
    return this.downloadCountService.update(+id, updateDownloadCountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.downloadCountService.remove(+id);
  }
}
