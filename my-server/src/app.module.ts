import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { IndicatorMiddleware } from './common/middleware/indicators.middleware';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DogsController } from './dogs/dogs.controller';
import { DogsModule } from './dogs/dogs.module';
import { MarketModule } from './market/market.module';


@Module({
  imports: [MarketModule, CatModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {

  // Adding some indicator middleware to know which route is used and how many timess
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IndicatorMiddleware)
      .forRoutes(CatController, DogsController);
  }
}
