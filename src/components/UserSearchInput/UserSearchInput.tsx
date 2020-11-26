/** @jsxImportSource @emotion/react */
import { FC, FormEvent, useState } from "react";

import { isUsernameValid } from "../../utils";
import * as styles from "./UserSearchInput.styles";
import { sharedStyles } from "../../styling";

interface Props {
  fetchGists: (username: string) => void;
}

const UserSearchInput: FC<Props> = ({ fetchGists }) => {
  const [username, updateUsername] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isUsernameValid(username)) {
      fetchGists(username);
    } else {
      alert("Username is invalid. It contains special characters.");
    }
  };

  return (
    <form onSubmit={onSubmit} css={styles.form}>
      <input
        type="text"
        placeholder="Username"
        autoFocus
        required
        onChange={(e) => updateUsername(e.target.value)}
        css={[sharedStyles.input, styles.input]}
      />
      <button type="submit" css={[sharedStyles.button.base]}>
        Get Gists
      </button>
    </form>
  );
};

export { UserSearchInput };
