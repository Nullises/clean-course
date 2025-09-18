import { Post, PostProvider } from "./05-dependency-c";

export class PostService {
  private posts: Post[] = [];

  constructor(private readonly postProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
