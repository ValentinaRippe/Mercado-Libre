import { render } from "@testing-library/react";
import { Home } from "../../src/pages/home/Home";

describe("Prueba Home", () => {
  test("debe de renderizar Home", () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });
});
