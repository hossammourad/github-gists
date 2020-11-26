import { render, waitFor } from "@testing-library/react";

import { FileViewer } from "./FileViewer";

describe("FileViewer", () => {
  it("renders the no file provided warning message if no file url is provided in the component's props", () => {
    const { getByTestId } = render(<FileViewer fileURL="" close={jest.fn()} />);
    expect(getByTestId("no-file-warning")).toBeDefined();
  });

  it("renders the loading message when a fileURL is provided while the request is loading", () => {
    const { getByTestId } = render(<FileViewer fileURL="test-value" close={jest.fn()} />);
    expect(getByTestId("loading-message")).toBeDefined();
  });

  it("renders the code block of the file's content when the request is finished", async () => {
    const globalRef: any = global;
    globalRef.fetch = () => ({
      status: 200,
      blob: () => ({
        text: () => "file code content"
      })
    });

    const { getByTestId } = render(<FileViewer fileURL="test-value" close={jest.fn()} />);

    await waitFor(() => {
      const element = getByTestId("file-content-code");
      expect(element).toBeDefined();
    });
  });

  it("renders the error section when the request throws an error", async () => {
    const globalRef: any = global;
    globalRef.fetch = () => ({
      status: 404
    });

    const { getByTestId } = render(<FileViewer fileURL="test-value" close={jest.fn()} />);

    await waitFor(() => {
      const element = getByTestId("error-message");
      expect(element).toBeDefined();
    });
  });
});
