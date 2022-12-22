import { Module } from '@nestjs/common';
import { NpmCountModule } from './npm-count/npm-count.module';

@Module({
  imports: [NpmCountModule],
})
export class AppModule {}
