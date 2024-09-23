import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { CustomLoggerService } from 'src/logger.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  providers: [PostsService, CustomLoggerService],
  controllers: [PostsController],
})
export class PostsModule {}
