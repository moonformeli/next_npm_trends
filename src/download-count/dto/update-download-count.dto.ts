import { PartialType } from '@nestjs/mapped-types';
import { CreateDownloadCountDto } from './create-download-count.dto';

export class UpdateDownloadCountDto extends PartialType(CreateDownloadCountDto) {}
