import { FC, useEffect, useState } from "react";

import { GistFork } from "../../types";

interface Props {
  gistID: string;
}

const GistForksList: FC<Props> = ({ gistID }) => {
  const [isLoading, updateIsLoading] = useState(false);
  const [forks, updateForks] = useState<GistFork[]>([]);
  const [error, updateError] = useState("");

  useEffect(() => {
    getGistForks(gistID);
  }, [gistID]);

  const getGistForks = async (gistID: string) => {
    updateIsLoading(true);
    const result = await fetch(`https://api.github.com/gists/${gistID}/forks`);
    if (result.status === 200) {
      updateForks(await result.json());
    } else {
      updateError(
        "A problem has occurred while fetching data. Please try again later. Check the browser console for the error message."
      );
    }
    updateIsLoading(false);
  };

  const renderForks = () => {
    if (isLoading) return "loading...";
    if (error) return error;
    if (forks.length === 0) return "This gist has no forks.";

    return forks.map((fork) => {
      return (
        <div key={fork.id}>
          <img src={fork.owner.avatar_url} alt={`${fork.owner} avatar`} />
          <span>{fork.owner.login}</span>
        </div>
      );
    });
  };

  return <>{renderForks()}</>;
};

export { GistForksList };
