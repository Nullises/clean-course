export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export abstract class PostProvider {
  abstract getPosts(): Promise<Post[]>;
}
