import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CustomLoggerService } from 'src/logger.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly logger: CustomLoggerService,
  ) {}

  @Post('index')
  async indexPost(@Body() body: { id: string; content: any }) {
    this.logger.log('Create posts')
    return this.postsService.indexPost(body.id, body.content);
  }

  @Get('search')
  async searchPosts(@Query('q') q: string) {
    this.logger.log('Search posts ');
    const query = {
      match: {
        content: q,
      },
    };
    return this.postsService.searchPosts(query);
  }
}
