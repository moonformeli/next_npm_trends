import Requester from '../requester';
import type {
  GetDownloadCountRequest,
  GetDownloadCountReponse,
} from 'src/interfaces';

class DownloadCountRequester extends Requester {
  constructor() {
    super('https://api.npmjs.org/downloads/range');
  }

  getDownloadCount({
    startDate,
    endDate,
    packageName,
  }: GetDownloadCountRequest) {
    return this.get<GetDownloadCountRequest, GetDownloadCountReponse>({
      url: `/range/${startDate}:${endDate}/${packageName}`,
    });
  }
}
