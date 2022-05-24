import { app } from "./../app";
import supertest from "supertest";

describe("createSite", () => {
  describe("given data", () => {
    it("should return new site", async () => {
      const { body } = await supertest(app).post("/api/sites").send({
        name: "sourav",
        location: "dhaka",
        description: "i am from dhaka",
        latitude: "-42.15454",
        longitude: "24.454",
      });
      expect(body._id).not.toBe("");
    });
  });
});
