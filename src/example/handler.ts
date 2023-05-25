import { ExampleGetController } from "./controllers/example-get.controller";
import { ExamplePostController } from "./controllers/example-post.controller";

export const post = new ExamplePostController().main();
export const get = new ExampleGetController().main();
