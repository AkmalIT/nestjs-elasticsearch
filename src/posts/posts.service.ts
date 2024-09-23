import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class PostsService {
  private readonly elasticsearchClient: Client;

  constructor() {
    this.elasticsearchClient = new Client({
      node: 'http://localhost:9200',
    });
  }

  async indexPost(postId: string, postContent: any) {
    return await this.elasticsearchClient.index({
      index: 'users',
      id: postId,
      body: postContent,
    });
  }

  async searchPosts(query: any) {
    return await this.elasticsearchClient.search({
      index: 'posts',
      body: {
        query,
      },
    });
  }
}
