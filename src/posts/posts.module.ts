import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
// import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
