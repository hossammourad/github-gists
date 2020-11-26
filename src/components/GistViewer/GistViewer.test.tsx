import { fireEvent, render } from "@testing-library/react";

import { GistViewer } from "./GistViewer";
import { Gist } from "../../types";

const gist: Gist = {
  id: "id-1",
  description: "description",
  html_url: "html-url",
  files: {
    test: {
      filename: "file1.txt",
      language: "plain",
      raw_url: "https://url.com"
    }
  }
};

describe("GistViewer", () => {
  it("renders UI elements for the gist info", () => {
    const { getByTestId } = render(<GistViewer gist={gist} />);
    expect(getByTestId("gist-description")).toBeDefined();
    expect(getByTestId("gist-link")).toBeDefined();
    expect(getByTestId("gist-forks-button")).toBeDefined();
    expect(getByTestId("gist-files-list")).toBeDefined();
  });

  it("renders the GistForksList component when the forks button is clicked", () => {
    const { getByTestId } = render(<GistViewer gist={gist} />);
    fireEvent.click(getByTestId("gist-forks-button"));
    expect(getByTestId("gist-forks-list")).toBeDefined();
  });

  it("renders 'Open Forks' label for the fork button by default", () => {
    const { getByText } = render(<GistViewer gist={gist} />);
    expect(getByText("Open Forks")).toBeDefined();
  });

  it("renders 'Close Forks' label for the fork button when the fork section is visible", () => {
    const { getByTestId, getByText } = render(<GistViewer gist={gist} />);
    fireEvent.click(getByTestId("gist-forks-button"));
    expect(getByText("Close Forks")).toBeDefined();
  });
});
