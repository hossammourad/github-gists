const isUsernameValid = (username: string) => {
  const invalidChars = Array.from("!\"#$%&'()*+,./:;<=>?@[\\]^`{|}~");
  return !invalidChars.some((x) => username.includes(x));
};

export { isUsernameValid };
