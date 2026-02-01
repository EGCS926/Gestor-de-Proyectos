// tests/backend.test.js
import request from "supertest";
import app from "../backend/src/app.js";

test("Crear tarea", async () => {
  const res = await request(app).post("/api/tasks").send({ title: "Test" });
  expect(res.statusCode).toBe(201);
});