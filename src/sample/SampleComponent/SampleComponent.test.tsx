/**
 *? SampleComponent Test
 */

import { render, screen } from "@testing-library/react";

import SampleComponent from "./SampleComponent";

describe("<SampleComponent />", () => {
  it("should render", () => {
    render(<SampleComponent />);
    expect(screen.getByText("SampleComponent")).toBeInTheDocument();
  });
});
