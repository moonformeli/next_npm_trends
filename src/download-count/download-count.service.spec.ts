import { Test, TestingModule } from '@nestjs/testing';
import { DownloadCountService } from './download-count.service';

describe('DownloadCountService', () => {
  let service: DownloadCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadCountService],
    }).compile();

    service = module.get<DownloadCountService>(DownloadCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
