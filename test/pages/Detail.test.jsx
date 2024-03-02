import { render } from "@testing-library/react";
import { Detail } from "../../src/pages/detail/Detail";

describe("Prueba Detail", () => {
  test("debe de renderizar Detail", () => {
    const { container } = render(<Detail />);
    expect(container).toBeTruthy();
  });
});
