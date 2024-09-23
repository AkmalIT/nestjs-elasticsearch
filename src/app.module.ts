import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    DatabaseModule,

    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino/file',
          options: { streams: [{ destination: '/var/log/nestjs/pino.log' }] },
        },
      },
    }),
  ],
})
export class AppModule {}
