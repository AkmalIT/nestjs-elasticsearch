import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class PostsService {
  private readonly elasticsearchClient: Client;

  constructor() {
    this.elasticsearchClient = new Client({
      node: 'https://localhost:9200',
      auth: { username: 'elastic', password: '_lfa9hanqZG8Wa98Yhi-' },
      tls: {
        rejectUnauthorized: false,
      },
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
