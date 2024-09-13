import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { IElasticsearchServiceIndex } from 'src/interface';
import { IElasticsearchServiceSearch } from 'src/interface/search';

@Injectable()
export class PostsService {
  private readonly elasticsearchClient: Client;

  constructor() {
    this.elasticsearchClient = new Client({ node: 'http://localhost:9200', auth: {username: "elastic", password: "6nku5dQDNVT5?L@"} });
  }

  async indexPost(postId: string, postContent: any) {
    return await this.elasticsearchClient.index<IElasticsearchServiceIndex>({
      index: 'posts',
      id: postId,
      body: postContent,
    });
  }

  async searchPosts(query: any) {
    return await this.elasticsearchClient.search<IElasticsearchServiceSearch>({
      index: 'posts',
      body: {
        query,
      },
    });
  }
}
