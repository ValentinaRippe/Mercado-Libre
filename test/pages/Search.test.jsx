import { render } from "@testing-library/react";
import { Search } from "../../src/pages/search/Search";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [
    new URLSearchParams({ search: "123" }),
  ],
}));

describe("Prueba Search", () => {
  test("debe de renderizar Search", () => {
    const { container } = render(<Search />);
    expect(container).toBeTruthy();
  });
});
