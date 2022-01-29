import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render", () => {
    render(<Button label="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
