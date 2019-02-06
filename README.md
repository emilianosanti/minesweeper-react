# React Minesweeper Game

A friendly Minesweeper game developed in React. [Demo](https://minesweeper-react-c4fa4.firebaseapp.com/)

## Code walkthrough - what we have so far:
- React Application with 3 routes, /setup /board /games
- React Router / Redux / Connected react router
- Sass (BEM methodology for all components)
- Reusable styles
- React components are 100% decoupled of the application business logic.
- Containers components and presentation component concept.
- Base components + App components
- The App is not fully responsive for mobile devices.

## Game status
- [X] When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)
- [X] Ability to 'flag' a cell with a question mark or red flag
- [X] Alert when game is over
- [X] Persistence. Not to lose the game if browser is closed
- [X] Time tracking
- [ ] Ability to start a new game and preserve/resume the old ones
- [X] Ability to select the game parameters: number of rows, columns, and mines
- [ ] Ability to support multiple users/accounts
- [X] Design and implement an API for the game (think of a mobile app for your API)
- [X] Nice user experience (eg avoid page reload while playing). Instead of blocking the user with the browser popup, the reload process is permitted since we are saving the game data, after the browser is refreshed the user is allowed to continue playing.
- [ ] Document all methods
- [X] Add Navigation toolbar
- [X] Add my game list, it will show a list with all the previous games with some util information.
- [ ] Add some unit test for the components.
- [ ] Add eslint.

## Setup Project
Clone the repository

`git clone git@github.com:emilianosanti/minesweeper-react.git`

Make sure you have the correct node version, you can set the project node version with nvm version manager. If you don't have `nvm` you can install it from [here](https://github.com/creationix/nvm/blob/master/README.md)

`nvm use`

Install dependencies

`npm i`

You're ready to run the available scripts.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
