import React from "react";
import { getData } from "../../common/request.js";


let LogoutPage = React.createClass({
  statics: {
    fetchData(params) {
      return getData("/logout");
    }
  },

  componentWillMount() {
    console.log("[Logout] will mount with server response: ", this.props.data.logout);
  },

  render() {
    let { title } = this.props.data.logout;

    return (
      <div id="Logout">
        <h2>{title}</h2>
      </div>
    );
  }
});


export default LogoutPage;