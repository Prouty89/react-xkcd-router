# React XKCD Router

<img src="https://i.imgur.com/Wh8J9mX.gif" />

Let's extend our Single Page Application of an [xkcd clone](https://github.com/blevs/react-xckd) to use [React Router](https://reacttraining.com/react-router/web/guides/quick-start) to give the website routing between comics and other pages.

You may use your code from that project, or the start code in this repo.

React router is already added as a dependency to this project to get started, import `BrowserRouter` from `react-router-dom` and wrap the `App` component in it inside of `index.js`.

```js
...
import { BrowserRouter as Router } from 'react-router-dom';
// You don't need to rename BrowserRouter to Rotuer, but most people do out of convention
...

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
```

For more information, you can follow the [Quick Start](https://reacttraining.com/react-router/web/guides/quick-start).

## Goals

* [ ] Be respectful of the limits of the cors-anywhere and xkcd api.
* [ ] Add a navigation component to the website that will display the comic, about page, and blag. (The about page and blag can be placeholder content).
* [ ] Refactor the `Comic` component to use a route parameter to render the appropriate comic number
* [ ] Make the page buttons modify the url paramter to change the comic (Hint: [They can still be buttons](https://reacttraining.com/react-router/web/api/Hooks/usehistory))

Note: Due to api limitations, making the random comic button work this way is actually a bit tricky, so that is considered a stretch goal.

## Stretch Goals

* [ ] Use [NavLink](https://reacttraining.com/react-router/web/api/NavLink)'s to style the navigation links differently when on that page.
* [ ] Make the random comic button work (Hint: What information do you need to get a random comic? How could you get that information when the button is pressed?)
* [ ] Make use of the React Router [hooks](https://reacttraining.com/react-router/web/api/Hooks) in addition to, or instead of, the route props.
* [ ] Do something interesting with the other pages (about and blag, for example).

## Notes

* [xkcd](https://xkcd.com) &copy; by Randall Munroe
* CORS (Cross-Origin Resource Sharing) is a _browser_ feature that allows servers to specify which websites are allowed to make requests  to access their content.

API's will use this feature to prevent other websites from interacting with them. For example, your bank's api will reject requets from evilwebsite.example.com.

It is possible to lie what website we are making the request from, or saying we are not a website at all. However, the web browser will not let us do this directly.

A common reason API's will use CORS is because they require a secret key to access. These secrets should never be used directly inside an SPA, as there is nothing preventing a user from copying them.

Instead, the intention is for us to create our own API that the browser calls which will then proxy the request, with the secret and as not coming from a website (therefor not triggering CORS), and return the data.

[cors anywhere](https://github.com/Rob--W/cors-anywhere) is a general purpose server that will do this proxying for us. Thankfully, the developers have a hosted version for us to use for simple projects like this https://cors-anywhere.herokuapp.com/.

It is important to recognize that this is a free tool, and we should not abuse it with large numbers of requests. It is very easy to run on your own machine for development purposes.

## Install and Use

To run and edit the project, clone the project to your computer, `cd` into the project directory and follow the instructions below for your javascript pacakge manager of choice.

### yarn

In the project directory run `yarn install` to install the depenencies, and `yarn start` to star the development server. It should open a browser tab to `localhost:3000`.

### npm

In the project directory run `npm install` to install the depenencies, and `npm start` to star the development server. It should open a browser tab to `localhost:3000`.
