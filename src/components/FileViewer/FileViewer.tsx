/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

import * as styles from "./FileViewer.styles";

interface Props {
  fileURL: string;
  close: () => void;
}

export const FileViewer: FC<Props> = ({ fileURL, close }) => {
  const [isLoading, updateIsLoading] = useState(false);
  const [error, updateError] = useState("");
  const [data, updateData] = useState("");

  useEffect(() => {
    fetchFileContent(fileURL);
  }, [fileURL]);

  const fetchFileContent = async (link: string) => {
    if (link) {
      updateIsLoading(true);
      const result = await fetch(link);
      if (result.status === 200) {
        updateData(await (await result.blob()).text());
      } else if (result.status === 404) {
        updateError("File not found.");
      } else {
        updateError("Error occurred. Try again later.");
      }
      updateIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) return <span data-testid="loading-message">Loading...</span>;
    if (error) return <span data-testid="error-message">{error}</span>;
    if (!fileURL) return <span data-testid="no-file-warning">No file was provided.</span>;
    return (
      <code css={styles.fileContent} data-testid="file-content-code">
        {data}
      </code>
    );
  };

  return (
    <div data-testid="file-viewer">
      <div css={styles.overlay} onClick={close} />
      <div css={styles.modalWrapper}>
        <FaTimesCircle size="24" css={styles.closeButton} onClick={close} />
        {renderContent()}
      </div>
    </div>
  );
};
