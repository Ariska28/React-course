import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../Button";

const text = "ClickMe!";

it("", () => {
  const mock = jest.fn();
  render(<Button onClick={mock}>{text}</Button>);
  const button = screen.getByText(text);

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(mock).toHaveBeenCalledTimes(1);
});
