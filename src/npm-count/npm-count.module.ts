import { Module } from '@nestjs/common';
import { NpmCountService } from './npm-count.service';
import { NpmCountController } from './npm-count.controller';

@Module({
  controllers: [NpmCountController],
  providers: [NpmCountService],
})
export class NpmCountModule {}
