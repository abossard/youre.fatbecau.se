import React from "react";
import Router from "react-router";
let { Route, DefaultRoute, RouteHandler } = Router;
import LandingPage from "../pages/landing/page.jsx";


let PublicRouter = React.createClass({
  statics: {
    getRoutes() {
      return (
        <Route name="app" path="/" handler={PublicRouter}>
          <DefaultRoute name="landing" handler={LandingPage} />
        </Route>
      );
    }
  },

  render() {
    return (
      <div id="container">
        <div id="main">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
});


export default PublicRouter