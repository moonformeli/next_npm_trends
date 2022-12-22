interface Download {
  downloads: number;
  day: string;
}

export interface GetNpmCountRequest {
  startDate: string;
  endDate: string;
  packageName: string;
}

export interface GetNpmCountReponse {
  downloads: Download[];
  start: string;
  end: string;
  package: string;
}
