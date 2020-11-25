import { FC, FormEvent, useState } from "react";

import { isUsernameValid } from "../../utils";

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
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          autoFocus
          required
          onChange={(e) => updateUsername(e.target.value)}
        />
      </form>
    </>
  );
};

export { UserSearchInput };
