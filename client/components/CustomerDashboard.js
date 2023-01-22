import React from "react";
import { Link } from "react-router-dom";
import smedia from "../smedia.png";
import "./Dashboard.css";

class CustomerDashboard extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{ backgroundImage: `url(${smedia})`, height: "100vh" }}
      >
        <div className="container">
          <h1 style={{ color: "#39ff14", textAlign: "center" }}>
            WELCOME BACK!
          </h1>
          <br />

          <center>
            <Link
              to="/viewloans"
              className="ui large inverted button"
              style={{ width: "25vw", fontStyle: "oblique", fontSize: "20px" }}
            >
              View Loan schemes
            </Link>
          </center>
          <br />

          <br />
          <center>
            <Link
              to="/viewapp"
              className="ui large inverted button"
              style={{ width: "25vw", fontStyle: "oblique", fontSize: "20px" }}
            >
              Review my loan application
            </Link>
            <br />
            <br />
            <br />
          </center>
          <center>
            <Link
              to="/view"
              className="ui large inverted button"
              style={{ width: "25vw", fontStyle: "oblique", fontSize: "20px" }}
            >
              Check my loan status
            </Link>
            <br />
            <br />
            <br />
            <Link
              to="/payments"
              className="ui large inverted button"
              style={{ width: "25vw", fontStyle: "oblique", fontSize: "20px" }}
            >
              Pay my Loan
            </Link>
          </center>
        </div>
      </div>
    );
  }
}

export default CustomerDashboard;
