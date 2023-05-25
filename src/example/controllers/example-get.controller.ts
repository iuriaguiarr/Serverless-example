import { ExampleGetService } from "../services/example-get.service";

export class ExampleGetController {
  constructor(private readonly handler = new ExampleGetService()) {}

  main() {
    return this.handler.main.bind(this.handler);
  }
}
