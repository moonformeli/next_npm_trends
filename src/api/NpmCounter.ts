import Requester from './Requester';
import type { GetNpmCountRequest, GetNpmCountReponse } from 'src/interfaces';

class NpmCounter extends Requester {
  constructor() {
    super('https://api.npmjs.org/downloads/range');
  }

  getDownloadCount({ startDate, endDate, packageName }: GetNpmCountRequest) {
    return this.get<GetNpmCountRequest, GetNpmCountReponse>({
      url: `/range/${startDate}:${endDate}/${packageName}`,
    });
  }
}
