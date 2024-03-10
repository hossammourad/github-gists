/** @jsxImportSource @emotion/react */
import { FC, useState } from "react";
import { FaLink } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

import { GistForksList } from "../GistForksList";
import { GistFilesList } from "../GistFilesList";
import { Gist } from "../../types";
import * as styles from "./GistViewer.styles";
import { sharedStyles } from "../../styling";

interface Props {
  gist: Gist;
}

export const GistViewer: FC<Props> = ({ gist }) => {
  const [isForksVisible, updateIsForksVisible] = useState(false);

  const renderForks = () => {
    if (!isForksVisible) return null;
    return (
      <div data-testid="gist-forks-list">
        <GistForksList key={gist.id} gistID={gist.id} />
      </div>
    );
  };

  const forksButtonText = isForksVisible ? "Close Forks" : "Open Forks";

  return (
    <div key={gist.id} css={styles.section}>
      <h3 css={styles.header}>
        <span css={styles.descriptionText} data-testid="gist-description">
          {gist.description || "Untitled gist"}
        </span>
        <div css={styles.forkOptions}>
          <button
            onClick={() => updateIsForksVisible(!isForksVisible)}
            css={[sharedStyles.button.base, sharedStyles.button.small, styles.forksButton]}
            data-testid="gist-forks-button"
          >
            {forksButtonText}
          </button>
          <a
            href={gist.html_url}
            target="_blank"
            rel="noreferrer"
            css={styles.gistLink}
            data-tip="Click to open the gist in GitHub"
            data-testid="gist-link"
          >
            <FaLink />
          </a>
        </div>
      </h3>

      <div css={styles.filesSection} data-testid="gist-files-list">
        <h4 css={styles.filesLabel}>Files</h4>
        <GistFilesList files={gist.files} />
      </div>

      {renderForks()}

      <ReactTooltip />
    </div>
  );
};
