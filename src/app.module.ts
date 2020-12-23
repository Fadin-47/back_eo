import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // Подключен логгер
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}