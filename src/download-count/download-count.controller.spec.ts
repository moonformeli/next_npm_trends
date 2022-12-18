import { Test, TestingModule } from '@nestjs/testing';
import { DownloadCountController } from './download-count.controller';
import { DownloadCountService } from './download-count.service';

describe('DownloadCountController', () => {
  let controller: DownloadCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DownloadCountController],
      providers: [DownloadCountService],
    }).compile();

    controller = module.get<DownloadCountController>(DownloadCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
