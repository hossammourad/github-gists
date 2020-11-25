import { FC, Fragment, useState } from "react";

import { GistForksList } from "../GistForksList";
import { Gist, GistFiles } from "../../types";

interface Props {
  gist: Gist;
}

const GistViewer: FC<Props> = ({ gist }) => {
  const [isForksVisible, updateIsForksVisible] = useState(false);

  const renderFiles = (files: GistFiles) => {
    return Object.keys(files).map((single) => {
      return (
        <div key={single}>
          <span>{single}</span> – <span>{files[single].language || "Plain Text"}</span>
        </div>
      );
    });
  };

  const renderForks = () => {
    if (!isForksVisible) return null;
    return <GistForksList key={gist.id} gistID={gist.id} />;
  };

  const forksButtonText = isForksVisible ? "Close Forks" : "Open Forks";

  return (
    <Fragment key={gist.id}>
      <h3>{gist.description || "No description found"}</h3>
      {renderFiles(gist.files)}
      <button onClick={() => updateIsForksVisible(!isForksVisible)}>{forksButtonText}</button>
      {renderForks()}
      <hr />
    </Fragment>
  );
};

export { GistViewer };
