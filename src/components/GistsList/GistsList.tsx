import { FC, Fragment } from "react";

import { Gist, GistFiles } from "../../types";

interface Props {
  gists: Gist[];
}

const GistsList: FC<Props> = ({ gists }) => {
  const renderFiles = (files: GistFiles) => {
    return Object.keys(files).map((single) => {
      return (
        <div key={single}>
          <span>{single}</span> – <span>{files[single].language || "Plain Text"}</span>
        </div>
      );
    });
  };

  return (
    <>
      {gists.map((gist) => {
        return (
          <Fragment key={gist.id}>
            <h3>{gist.description || "No description found"}</h3>
            {renderFiles(gist.files)}
            <button>Check Forks</button>
            <hr />
          </Fragment>
        );
      })}
    </>
  );
};

export { GistsList };
