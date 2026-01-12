import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BikesModule } from './bikes/bikes.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bike_library'),
    BikesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // apply to all routes
  }
}
