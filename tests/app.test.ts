import app, { listeningServer } from "../src/app";
import request from "supertest";

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeNull();
    expect(response.body.msg).toEqual("API is up");
  });
});

afterAll(() => {
  listeningServer.close();
});
