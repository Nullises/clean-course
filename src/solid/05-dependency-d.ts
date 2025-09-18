import localPosts from "../data/local-database.json";
import { Post, PostProvider } from "./05-dependency-c";

export class JSONDatabaseService implements PostProvider {
  async getPosts() {
    return localPosts;
  }
}

export class WebDatabaseService implements PostProvider {
  async getPosts(): Promise<Post[]> {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
  }
}
