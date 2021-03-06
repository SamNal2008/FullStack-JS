import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicatorMiddleware } from './common/middleware/indicators.middleware';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { CriConnectionModule } from './cri-connection/cri-connection.module';



@Module({
  imports: [UsersModule, CoursesModule, TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }), AuthModule, CriConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {

  // Adding some indicator middleware to know which route is used and how many timess
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IndicatorMiddleware)
      .forRoutes();
  }
}
