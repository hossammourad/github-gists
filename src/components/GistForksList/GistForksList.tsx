/** @jsxImportSource @emotion/react */
import { FC, Fragment, useEffect, useState } from "react";

import { GistFork } from "../../types";
import * as styles from "./GistForksList.styles";

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
    const result = await fetch(`https://api.github.com/gists/${gistID}/forks?per_page=3`);
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
    if (forks.length === 0) return <span css={styles.noForks}>This gist has no forks.</span>;

    return (
      <Fragment>
        <h4 css={styles.forksLabel}>Latest 3 forks</h4>
        <div css={styles.forksList}>
          {forks.map((fork) => {
            return (
              <a
                href={fork.html_url}
                target="_blank"
                rel="noreferrer"
                key={fork.id}
                css={styles.singleFork}
              >
                <img
                  src={fork.owner.avatar_url}
                  alt={`${fork.owner} avatar`}
                  css={styles.userAvatar}
                />
                <span>{fork.owner.login}</span>
              </a>
            );
          })}
        </div>
      </Fragment>
    );
  };

  return <div css={styles.forksSection}>{renderForks()}</div>;
};

export { GistForksList };
