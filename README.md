# GitHub Gists App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Demo: https://hmourad-github-gists.netlify.app/**

### Available scripts (How to run the app):

- `yarn install` -> install dependencies
- `yarn start` -> start the app
- `yarn test` -> run the tests
- `yarn build` -> create the build folder for deployment

### Features implemented:

- Search for the public gists of a GitHub user
- See a badge of the type of any given file
- Check who created the latest 3 forks of any given gist
- See the content of gist's files without the need to go to GitHub
- A "Reset" feature so the user can start fresh without the need to manually refresh the app's page

### Further improvements:

- Write more tests for the `App` and `UserSearchInput` components
- Add a better abstract way to render loading/error messages
- Cache requests that have been already triggered
