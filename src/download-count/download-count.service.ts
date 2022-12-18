import { Injectable } from '@nestjs/common';
import { CreateDownloadCountDto } from './dto/create-download-count.dto';
import { UpdateDownloadCountDto } from './dto/update-download-count.dto';

@Injectable()
export class DownloadCountService {
  create(createDownloadCountDto: CreateDownloadCountDto) {
    return 'This action adds a new downloadCount';
  }

  findAll() {
    return `This action returns all downloadCount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} downloadCount`;
  }

  update(id: number, updateDownloadCountDto: UpdateDownloadCountDto) {
    return `This action updates a #${id} downloadCount`;
  }

  remove(id: number) {
    return `This action removes a #${id} downloadCount`;
  }
}
