import { get, post } from "../example/handler";

import { APIGatewayEvent } from "aws-lambda";
import examplePostMock from "./mocks/example-post.mock.json";

describe("Example Module", () => {
  test("Get", async () => {
    const event = {} as APIGatewayEvent;

    const result = await get(event);

    expect(result.statusCode).toEqual(200);
  });

  test("Post", async () => {
    const event = { body: JSON.stringify(examplePostMock) } as APIGatewayEvent;

    const result = await post(event);

    expect(result.statusCode).toEqual(200);
  });
});
