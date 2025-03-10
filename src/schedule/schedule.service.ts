// import { Injectable } from '@nestjs/common';
// import { Cron } from '@nestjs/schedule'
// import { RedisService } from 'src/redis/redis.service';
// import { PostService } from 'src/post/post.service';

// @Injectable()
// export class ScheduleService {
//   constructor(
//     private readonly redisService: RedisService,
//     private readonly postService: PostService,
//   ) {}

//   @Cron('0 0 * * *', {
//     timeZone: 'Asia/Seoul',
//   })
//   async handleCron() {
//     console.log('Running a job at 00:00 Seoul time');

//     // Redis 캐시 비우기
//     await this.redisService.deletePopularTravelPostsCache();
//     await this.redisService.deletePopularNormalPostsCache();

//     // 인기글 최신화
//     await this.postService.updatePopularPosts();
//   }
// }