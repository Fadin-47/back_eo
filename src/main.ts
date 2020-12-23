import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from 'all-exception.filter';
import { AppModule } from './app.module';
/* import { LoggerMiddleware } from './logger.middleware'; */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Можно использовать Middleware'ы глобально */
  /* app.use(LoggerMiddleware); */

  /* Подключили фильтр-перехватчик HTTP-ошибок */
  app.useGlobalFilters(new AllExceptionsFilter);

  await app.listen(3001);
}
bootstrap();
