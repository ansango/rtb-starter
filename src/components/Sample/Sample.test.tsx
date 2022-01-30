/**
 * ?Sample Test
 */

import { render, screen } from "@testing-library/react";

import Sample from "./Sample";

describe("<Sample />", () => {
  it("should render", () => {
    render(<Sample />);
    expect(screen.getByText("Sample")).toBeInTheDocument();
  })
})