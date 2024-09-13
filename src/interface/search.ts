export interface IElasticsearchServiceSearch {
  index: string;
  body: {
    query: any;
  };
}
