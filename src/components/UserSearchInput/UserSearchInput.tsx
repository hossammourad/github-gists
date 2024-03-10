/** @jsxImportSource @emotion/react */
import { FC, FormEvent, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";

import { isUsernameValid } from "../../utils";
import * as styles from "./UserSearchInput.styles";
import { sharedStyles } from "../../styling";

interface Props {
  fetchGists: (username: string) => void;
  reset: () => void;
}

export const UserSearchInput: FC<Props> = ({ fetchGists, reset }) => {
  const [username, updateUsername] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isUsernameValid(username)) {
      fetchGists(username);
    } else {
      alert("Username is invalid. It contains special characters.");
    }
  };

  const resetOnClick = () => {
    updateUsername("");
    reset();
    inputRef?.current?.focus();
  };

  return (
    <header css={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          autoFocus
          required
          value={username}
          ref={inputRef}
          onChange={(e) => updateUsername(e.target.value)}
          css={[sharedStyles.input, styles.input]}
        />

        <button type="submit" css={[sharedStyles.button.base]}>
          Get Gists
        </button>

        <button
          type="button"
          css={[sharedStyles.button.base, sharedStyles.button.danger, styles.resetButton]}
          onClick={resetOnClick}
        >
          Reset
        </button>
      </form>

      <h1 css={styles.title}>
        <FaGithub css={styles.githubIcon} />
        GitHub Gists
      </h1>
    </header>
  );
};
