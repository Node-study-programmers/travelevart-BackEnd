import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Postlike } from './entities/postlike.entity';
import { User } from 'src/user/entities/user.entity';
import { authMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { Comment } from 'src/comment/entities/comment.entity'
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Postlike, User, Comment]), AuthModule, RedisModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authMiddleware)
      .exclude(
        { path: 'posts', method: RequestMethod.GET },
        { path: 'posts/:id', method: RequestMethod.GET },
      )
      .forRoutes(PostController);
  }
}
