import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { AlertModule } from './alert/alert.module';
import { PlaceModule } from './place/place.module';
import { CartModule } from './cart/cart.module';
import { DiaryModule } from './diary/diary.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
// import { ScheduleModule } from './schedule/schedule.module';
import { S3Module } from './s3/s3.module';
import { TravelRouteModule } from './custom/custom.module';
import { GptModule } from './gpt/gpt.module';
import { EventModule } from './event/event.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    PostModule,
    CommentModule,
    AlertModule,
    PlaceModule,
    CartModule,
    TravelRouteModule,
    DiaryModule,
    MailModule,
    RedisModule,
    // ScheduleModule,
    S3Module,
    GptModule,
    EventModule,
    HealthcheckModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
