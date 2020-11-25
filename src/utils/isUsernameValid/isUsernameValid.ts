const isUsernameValid = (username: string) => {
  const invalidChars = Array.from("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
  return !invalidChars.some((x) => username.includes(x));
};

export { isUsernameValid };
