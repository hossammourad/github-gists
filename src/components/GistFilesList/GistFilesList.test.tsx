import { fireEvent, render, waitFor } from "@testing-library/react";

import { GistFilesList } from "./GistFilesList";
import { GistFiles } from "../../types";

const files: GistFiles = {
  file1: {
    filename: "file1.txt",
    language: "plain",
    raw_url: "https://url.com"
  }
};

describe("GistFilesList", () => {
  it("renders an element for the filename and file language", () => {
    const { getByTestId } = render(<GistFilesList files={files} />);
    expect(getByTestId("filename-element")).toBeDefined();
    expect(getByTestId("filename-language")).toBeDefined();
  });

  it("renders a modal when the filename is clicked", async () => {
    const { getByTestId } = render(<GistFilesList files={files} />);
    fireEvent.click(getByTestId("filename-element"));

    await waitFor(() => {
      expect(getByTestId("file-viewer")).toBeDefined();
    });
  });
});
