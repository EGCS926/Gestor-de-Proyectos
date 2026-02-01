import request from "supertest";
import app from "../app.js";

describe("GET /api/projects", () => {
  it("Debe devolver un arreglo de proyectos", async () => {
    const res = await request(app).get("/api/projects");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});