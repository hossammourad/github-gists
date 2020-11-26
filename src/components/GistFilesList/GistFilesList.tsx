/** @jsxImportSource @emotion/react */
import { FC, Fragment } from "react";
import { FaFile } from "react-icons/fa";

import { GistFiles } from "../../types";
import * as styles from "./GistFilesList.styles";

interface Props {
  files: GistFiles;
}

const GistFilesList: FC<Props> = ({ files }) => {
  return (
    <Fragment>
      {Object.keys(files).map((single) => {
        return (
          <div key={single} css={styles.singleFile}>
            <FaFile css={styles.fileIcon} />
            <code css={styles.fileName}>{single}</code>
            <span css={styles.fileBadge(files[single].language)}>
              {files[single].language || "Plain Text"}
            </span>
          </div>
        );
      })}
    </Fragment>
  );
};

export { GistFilesList };
