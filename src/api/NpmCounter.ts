import Requester from './Requester';
import type { GetNpmCountRequest, GetNpmCountReponse } from 'src/interfaces';
import type { DtoClass } from 'lib/validate';
import Container from 'lib/container';

export default class NpmCounter extends Requester {
  constructor() {
    super('https://api.npmjs.org/downloads/range');
  }

  async getNpmCount<T>(
    { startDate, endDate, packageName }: GetNpmCountRequest,
    dtoClass: DtoClass<T>,
  ) {
    const { isError, error } = await this.validateDto(dtoClass, {
      startDate,
      endDate,
      packageName,
    });

    if (isError) {
      return Container.Left(error).pack();
    }

    return this.get<GetNpmCountRequest, GetNpmCountReponse>({
      url: `/range/${startDate}:${endDate}/${packageName}`,
    });
  }
}
