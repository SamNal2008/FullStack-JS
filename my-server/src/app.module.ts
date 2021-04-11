import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogsModule } from './dogs/dogs.module';
import { MarketModule } from './market/market.module';


@Module({
  imports: [MarketModule, CatModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
