import { LoggerUtil } from "../../utils/logger.util";
import { ResponseHandlerUtil } from "../../utils/response-handlers.util";

export class ExampleGetService {
  constructor(
    private readonly responseHandler = new ResponseHandlerUtil(),
    private readonly logger = new LoggerUtil(ExampleGetService.name)
  ) {}

  async main() {
    try {
      return this.responseHandler.success({ body: { Hello: "World" } });
    } catch (error) {
      this.logger.error(error.stack);
      return this.responseHandler.error();
    }
  }
}
