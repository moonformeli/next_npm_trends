import { IsString, IsDateString } from 'class-validator';

interface GetDownloadCountDtoInterface {
  startDate: string;
  endDate: string;
  name: string;
}

/**
 * @link https://github.com/npm/registry/blob/master/docs/download-counts.md
 */
export class GetDownloadCountDto implements GetDownloadCountDtoInterface {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  name: string;
}
