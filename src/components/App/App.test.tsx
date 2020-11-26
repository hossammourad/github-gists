import { render } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("renders the no gists warning message by default", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("no-gists-warning")).toBeDefined();
  });
});
