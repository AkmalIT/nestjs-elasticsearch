import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('index')
  async indexPost(@Body() body: { id: string; content: any }) {
    return this.postsService.indexPost(body.id, body.content);
  }

  @Get('search')
  async searchPosts(@Query('q') q: string) {
    const query = {
      match: {
        content: q,
      },
    };
    return this.postsService.searchPosts(query);
  }
}
