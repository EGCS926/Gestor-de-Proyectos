import { render, screen } from "@testing-library/react";
import App from "../frontend/src/App";

describe("Gestor de tareas - Frontend", () => {
  test("renderiza el título principal", () => {
    render(<App />);
    expect(screen.getByText("Gestor de Tareas")).toBeInTheDocument();
  });

  test("renderiza el botón Agregar", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /agregar/i })).toBeInTheDocument();
  });
});