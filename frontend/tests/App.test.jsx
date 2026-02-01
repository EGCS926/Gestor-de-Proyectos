import { render, screen } from "@testing-library/react";
import App from "../App";
import axios from "axios";

jest.mock("axios");

test("muestra proyectos en la interfaz", async () => {
  axios.get.mockResolvedValue({
    data: [
      { _id: "1", name: "Proyecto A" },
      { _id: "2", name: "Proyecto B" }
    ]
  });

  render(<App />);

  expect(await screen.findByText("Proyecto A")).toBeInTheDocument();
  expect(await screen.findByText("Proyecto B")).toBeInTheDocument();
});