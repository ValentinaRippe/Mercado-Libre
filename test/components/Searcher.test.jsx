import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { Searcher } from "../../src/components/searcher/Searcher";

describe("Prueba Searcher", () => {
  test("debe de renderizar Searcher", () => {
    const { container } = render(<Searcher />);
    expect(container).toBeTruthy();
  });

  test("debe retornar un string", async () => {
    let searchText;
    const onSearchValueChange = (e) => {
      searchText = e;
    };
    render(
      <Searcher onSearchValueChange={onSearchValueChange} />
    );

    const input = screen.getByTestId("value-search");
    fireEvent.change(input, { target: { value: "apple" } });

    fireEvent.click(screen.getByTestId("search"));

    expect(typeof searchText).toBe("string");
  });
});
