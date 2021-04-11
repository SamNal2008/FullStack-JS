import { Module } from '@nestjs/common';
import { CatModule } from 'src/cat/cat.module';
import { DogsModule } from 'src/dogs/dogs.module';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';

@Module({
  imports: [CatModule, DogsModule],
  controllers: [MarketController],
  providers: [MarketService]
})
export class MarketModule {}
