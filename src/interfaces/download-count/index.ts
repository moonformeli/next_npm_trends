interface Download {
  downloads: number;
  day: string;
}

export interface GetDownloadCountRequest {
  startDate: string;
  endDate: string;
  packageName: string;
}

export interface GetDownloadCountReponse {
  downloads: Download[];
  start: string;
  end: string;
  package: string;
}
