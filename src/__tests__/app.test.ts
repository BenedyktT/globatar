import { app } from "../app";
import supertest, { SuperTest } from "supertest";

const request: SuperTest<any> = supertest.agent(app);

describe("main app endpoint test exist", () => {
  test("should be defined and exported", () => {
    expect(app).toBeDefined();
  });
  describe("and it answers", () => {
    test("should answer to a request with status 200", async () => {
      const get = await request.get("/");
      expect(get.status).toBe(200);
    });
  });
});
