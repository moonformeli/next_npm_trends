import { IsString, IsDateString } from 'class-validator';
import type { GetDownloadCountRequest } from 'src/interfaces';

/**
 * @link https://github.com/npm/registry/blob/master/docs/download-counts.md
 */
export class GetDownloadCountDto implements GetDownloadCountRequest {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  name: string;
}
