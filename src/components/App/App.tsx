import { FC, useState } from "react";

import { UserSearchInput, GistViewer } from "../../components";
import { Gist } from "../../types";

const App: FC = () => {
  const [gists, updateGists] = useState<Gist[]>([]);
  const [isLoading, updateIsLoading] = useState(false);
  const [error, updateError] = useState("");

  const fetchGists = async (username: string) => {
    updateError("");
    updateIsLoading(true);
    const result = await fetch(`https://api.github.com/users/${username}/gists`);
    if (result.status === 200) {
      updateGists(await result.json());
    } else if (result.status === 404) {
      updateError("Username is not found. Try another one.");
    } else {
      updateError(
        "A technical problem has occurred while fetching data. Please try again later. Check the browser console for the error message."
      );
    }
    updateIsLoading(false);
  };

  const renderGists = () => {
    if (isLoading) return "Loading...";
    if (error) return error;
    if (gists.length === 0) return "No gists found. Try searching by a username.";
    return gists.map((gist) => <GistViewer key={gist.id} gist={gist} />);
  };

  return (
    <>
      <UserSearchInput fetchGists={fetchGists} />
      {renderGists()}
    </>
  );
};

export { App };
