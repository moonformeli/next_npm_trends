import { Test, TestingModule } from '@nestjs/testing';
import { NpmCountService } from './npm-count.service';

describe('NpmCountService', () => {
  let service: NpmCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NpmCountService],
    }).compile();

    service = module.get<NpmCountService>(NpmCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
