/** @jsxImportSource @emotion/react */
import { FC, useState } from "react";
import { FaFile } from "react-icons/fa";

import { GistForksList } from "../GistForksList";
import { Gist, GistFiles } from "../../types";
import * as styles from "./GistViewer.styles";
import { sharedStyles } from "../../styling";

interface Props {
  gist: Gist;
}

const GistViewer: FC<Props> = ({ gist }) => {
  const [isForksVisible, updateIsForksVisible] = useState(false);

  const renderFiles = (files: GistFiles) => {
    return Object.keys(files).map((single) => {
      return (
        <div key={single} css={styles.singleFile}>
          <FaFile css={styles.fileIcon} />
          <code css={styles.fileName}>{single}</code>
          <span css={styles.fileBadge(files[single].language)}>
            {files[single].language || "Plain Text"}
          </span>
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
    <div key={gist.id} css={styles.section}>
      <h3 css={styles.description}>
        {gist.description || "No description found"}
        <button
          onClick={() => updateIsForksVisible(!isForksVisible)}
          css={[sharedStyles.button.base, sharedStyles.button.small, styles.forksButton]}
        >
          {forksButtonText}
        </button>
      </h3>
      <div css={styles.filesSection}>
        <h4 css={styles.filesLabel}>Files</h4>
        {renderFiles(gist.files)}
      </div>
      {renderForks()}
    </div>
  );
};

export { GistViewer };
