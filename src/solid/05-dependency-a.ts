import { PostService } from "./05-dependency-b";
import { WebDatabaseService } from "./05-dependency-d";
//import { JSONDatabaseService } from "./05-dependency-d";

// Main
(async () => {
  //const provider = new JSONDatabaseService();
  const provider = new WebDatabaseService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
