import { FC, useState } from "react";

import { UserSearchInput } from "../../components/UserSearchInput";
import { Gist } from "../../types";
import { GistsList } from "../GistsList";

const App: FC = () => {
  const [gists, updateGists] = useState<Gist[]>([]);
  const [isLoading, updateIsLoading] = useState(false);
  const [error, updateError] = useState("");

  const fetchGists = async (username: string) => {
    updateIsLoading(true);
    const result = await fetch(`https://api.github.com/users/${username}/gists`);
    if (result.status === 200) {
      updateGists(await result.json());
    } else {
      updateError(
        "A problem has occurred while fetching data. Please try again later. Check the browser console for the error message."
      );
    }
    updateIsLoading(false);
  };

  const renderGists = () => {
    if (isLoading) return "Loading...";
    if (error) return error;
    if (gists.length === 0) return "No gists found. Try searching by a username.";
    return <GistsList gists={gists} />;
  };

  return (
    <>
      <UserSearchInput fetchGists={fetchGists} />
      {renderGists()}
    </>
  );
};

export { App };
