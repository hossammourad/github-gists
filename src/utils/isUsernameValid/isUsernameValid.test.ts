import { isUsernameValid } from "./isUsernameValid";

describe("isUsernameValid", () => {
  it.each(["#test", "te!st", "test*"])(
    "returns false when providing %s as a username for the input",
    (username) => {
      const result = isUsernameValid(username);
      expect(result).toBeFalsy();
    }
  );

  it.each(["test", "test_test", "test-test"])(
    "returns true when providing %s as a valid username for the input",
    (username) => {
      const result = isUsernameValid(username);
      expect(result).toBeTruthy();
    }
  );
});
