import { HTTPClient } from "./02-open-close-c";

export class TodoService {
  constructor(private readonly httpClient: HTTPClient) {}

  async getTodoItems() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private readonly httpClient: HTTPClient) {}
  async getPosts() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private readonly httpClient: HTTPClient) {}
  async getPhotos() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
