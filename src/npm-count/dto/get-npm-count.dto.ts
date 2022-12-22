import { IsString, IsDateString } from 'class-validator';
import type { GetNpmCountRequest } from 'src/interfaces';

/**
 * @link https://github.com/npm/registry/blob/master/docs/download-counts.md
 */
export class GetNpmCountDto implements GetNpmCountRequest {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  packageName: string;
}
