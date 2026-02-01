import request from "supertest";
import app from "../app.js";

describe("GET /api/projects", () => {
  it("Debe devolver un arreglo de proyectos", async () => {
    const res = await request(app).get("/api/projects");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
describe("POST /api/projects", () => {
  it("Debe crear un proyecto y devolver HTTP 201", async () => {
    const newProject = {
      name: "Proyecto Test",
      description: "Proyecto creado desde test"
    };

    const res = await request(app)
      .post("/api/projects")
      .send(newProject);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe(newProject.name);
  });
});