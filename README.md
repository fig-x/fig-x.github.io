# About the website

This website was written in `React.js` + `bootstrap 5` + `react-gh-pages` (to deploy to Github). You should be able to pull the github repository (the `gh-pages` branch) and then develop it locally. Each page (e.g. Home) is a *.js file. However, most of the datasets used are in the other `fig-x-data` repository. 

## Maintain

Except for the **welcome** text and `work with us` page which are embedded in the html, you should refer to `fig-x-data`  when updating the content, including

- News on the `Home` page (`news.json` in that repo)
- Research area on the `Research` page (`research.json` and `research` folder in that repo)
- Publication list on the `Publication` page (`publication.json` and `publication` folder in that repo)
- People on the `People` page (`people.json` and `people` folder in that repo)
- Artifact list on the `Artifact` page (`artifact.json` in that repo)

You shouldn't need to update this repository very much unless you need to change the style or add/remove a page. Fumeng expects that she will maintain this repository for the first few years, and eventually students should maintain this website or rewrite it. 

## TODOs
- [ ] update logo
- [ ] update the links in the footer
- [ ] add UMD logo in the footer or somewhere
- [ ] the design of the `Research` page: one column or two-column?
- [ ] maybe add awards in the `Publication` page
- [ ] test on a larger screen

# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Notes

- See `https://github.com/gitname/react-gh-pages` for how to deploy this to Github.
- See `https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages` for routing problems.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### `npm run deploy` 

To deploy this page to github.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
