/** @jsxImportSource @emotion/react */
import { FC, Fragment, useState } from "react";
import { FaFile } from "react-icons/fa";

import { FileViewer } from "../FileViewer";
import { GistFiles } from "../../types";
import * as styles from "./GistFilesList.styles";

interface Props {
  files: GistFiles;
}

const GistFilesList: FC<Props> = ({ files }) => {
  const [fileInModal, setFileInModal] = useState("");

  const renderFileModal = () => {
    if (fileInModal.length === 0) return null;
    return <FileViewer fileURL={fileInModal} close={closeFileModal} />;
  };

  const closeFileModal = () => {
    setFileInModal("");
  };

  return (
    <Fragment>
      {Object.keys(files).map((single) => {
        return (
          <div key={single} css={styles.singleFile}>
            <FaFile css={styles.fileIcon} />
            <code css={styles.fileName} onClick={() => setFileInModal(files[single].raw_url)}>
              {single}
            </code>
            <span css={styles.fileBadge(files[single].language)}>
              {files[single].language || "Plain Text"}
            </span>
          </div>
        );
      })}

      {renderFileModal()}
    </Fragment>
  );
};

export { GistFilesList };