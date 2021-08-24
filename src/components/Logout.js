import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div>
        <div className="card border-success mb-3 w-50 mx-auto mt-5 text-center">
          <div className="card-header">Logout Successfully</div>
          <div className="card-body">
            <h5 className="card-title">Please Click On the Below Link To Login Again</h5>
            <Link to="/">Login Again</Link>
          </div>
        </div>
      </div>
    );
  }
}
