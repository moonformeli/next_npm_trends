import { Test, TestingModule } from '@nestjs/testing';
import { NpmCountController } from './npm-count.controller';
import { NpmCountService } from './npm-count.service';

describe('NpmCountController', () => {
  let controller: NpmCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NpmCountController],
      providers: [NpmCountService],
    }).compile();

    controller = module.get<NpmCountController>(NpmCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
