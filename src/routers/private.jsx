import React from "react";
import Router from "react-router";
let { Route, DefaultRoute, RouteHandler, Link } = Router;

import HomePage from "../pages/home/page.jsx";
import LogoutPage from "../pages/logout/page.jsx";

let PrivateRouter = React.createClass({
  statics: {
    getRoutes() {
      return (
        <Route name="app" path="/" handler={PrivateRouter}>
          <DefaultRoute name="home" handler={HomePage} />
          <Route name="logout" handler={LogoutPage} />
        </Route>
      );
    }
  },

  render() {
    return (
      <div id="container">
        <div id="navigation">
          <header>
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="logout">Logout</Link></li>
            </ul>
          </header>
        </div>

        <div id="main">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
});


export default PrivateRouter