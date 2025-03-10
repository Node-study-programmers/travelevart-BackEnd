// import { Module } from '@nestjs/common';
// import { ScheduleModule as NestScheduleModule } from '@nestjs/schedule';
// import { PostModule } from 'src/post/post.module';// PostService를 포함하는 모듈 경로
// import { RedisModule } from 'src/redis/redis.module';
// import { ScheduleService } from './schedule.service';

// @Module({
//   imports: [
//     NestScheduleModule.forRoot(),
//     PostModule, // PostService가 제공되는 모듈 추가
//     RedisModule, // RedisService가 제공되는 모듈 추가
//   ],
//   providers: [ScheduleService],
// })
// export class ScheduleModule {}