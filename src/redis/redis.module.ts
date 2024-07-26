import { Global, Module } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisService } from './redis.service';

@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () =>
        new Redis(6379, 'localhost', {
          retryStrategy: (time) => time + 30000000, //redis 재연결 시도 임시로 겁나 늘려놓았음
        }),
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule {}