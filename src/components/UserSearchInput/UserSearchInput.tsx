import { FC, FormEvent, useState } from "react";

interface Props {
  fetchGists: (username: string) => void;
}

const UserSearchInput: FC<Props> = ({ fetchGists }) => {
  const [username, updateUsername] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchGists(username);
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
