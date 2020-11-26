import { render, waitFor } from "@testing-library/react";

import { GistForksList } from "./GistForksList";

describe("GistForksList", () => {
  it("renders the loading section by default", () => {
    const { getByTestId } = render(<GistForksList gistID="test-value" />);
    expect(getByTestId("loading-section")).toBeDefined();
  });

  it("renders the error section if the request throws an error", async () => {
    const globalRef: any = global;
    globalRef.fetch = () => ({
      status: 404
    });

    const { getByTestId } = render(<GistForksList gistID="test-value" />);

    await waitFor(() => {
      const element = getByTestId("error-section");
      expect(element).toBeDefined();
    });
  });

  it("renders the no forks section if the no forks are returned from the request", async () => {
    const globalRef: any = global;
    globalRef.fetch = () => ({
      status: 200,
      json: () => []
    });

    const { getByTestId } = render(<GistForksList gistID="test-value" />);

    await waitFor(() => {
      const element = getByTestId("no-forks-section");
      expect(element).toBeDefined();
    });
  });

  it("renders the fork UI elements if there are forks returned from the request", async () => {
    const globalRef: any = global;
    globalRef.fetch = () => ({
      status: 200,
      json: () => [
        {
          id: "id-1",
          owner: {
            avatar_url: "avatar url",
            login: "avatar-username"
          }
        }
      ]
    });

    const { getByTestId } = render(<GistForksList gistID="test-value" />);

    await waitFor(() => {
      const avatarElement = getByTestId("fork-owner-avatar");
      expect(avatarElement).toBeDefined();
      const usernameElement = getByTestId("fork-owner-username");
      expect(usernameElement).toBeDefined();
    });
  });
});
