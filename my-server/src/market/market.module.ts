import { Module } from '@nestjs/common';
import { CatModule } from 'src/cat/cat.module';
import { CatService } from 'src/cat/cat.service';
import { DogsModule } from 'src/dogs/dogs.module';
import { DogsService } from 'src/dogs/dogs.service';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';

@Module({
  imports: [CatModule, DogsModule],
  controllers: [MarketController],
  providers: [MarketService, DogsService, CatService]
})
export class MarketModule {}
