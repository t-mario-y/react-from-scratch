import { fireEvent, getByTestId, render } from "@testing-library/react";
import React from "react";
import { Counter } from "./Counter";

describe("Counter element", () => {
  it("App loads with initial state of 0", () => {
    const { container } = render(<Counter />);
    const countValue = getByTestId(container, "countValue");

    expect(countValue.textContent).toBe("0");
  });

  it("increment button increments counter value", () => {
    const { container } = render(<Counter />);
    const countValue = getByTestId(container, "countValue");
    const increment = getByTestId(container, "increment");

    fireEvent.click(increment);

    expect(countValue.textContent).toBe("1");
  });

  it("decrement button decrements counter value", () => {
    const { container } = render(<Counter />);
    const countValue = getByTestId(container, "countValue");
    const decrement = getByTestId(container, "decrement");

    fireEvent.click(decrement);

    expect(countValue.textContent).toBe("-1");
  });
});
