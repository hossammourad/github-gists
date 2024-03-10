# GitHub Gists

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Demo: https://hmourad-github-gists.netlify.app/**

### Scripts

- `yarn install` -> install dependencies
- `yarn start` -> start the app
- `yarn test` -> run the tests
- `yarn build` -> create a production build

### Features implemented:

- Search for the public gists of a GitHub user
- List who created the latest 3 forks of any given gist
- See the content of gist's files without the need to go to GitHub
- A "Reset" feature so the user can start fresh

### Further improvements:

- Write more tests for the `App` and `UserSearchInput` components
- Add a better abstract way to render loading/error messages
- Cache requests that have been already executed
