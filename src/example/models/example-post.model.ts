import Joi from "@hapi/joi";

export class ExamplePostModel {
  public validate() {
    return Joi.object({
      name: Joi.string().max(100).min(2).required(),
    });
  }
}
