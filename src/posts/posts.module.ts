import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'https://localhost:9200',
      tls: {
        rejectUnauthorized: false,
      },
    }),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
