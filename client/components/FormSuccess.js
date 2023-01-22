import React from "react";
import { Link } from "react-router-dom";

class FormSuccess extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui four column centered grid">
          <div className="column" style={{ marginTop: "70px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <i
              className="massive thumbs up outline icon"
              style={{ color: "#14ff2a" }}
            ></i>
            <label style={{ color: "#14ff2a", fontSize: "50px" }}>
              Successfull!
            </label>
            <br />
            <br />
          </div>
        </div>
        <div style={{ border: "1px solid white", padding: "10px" }}>
          <center>
            <label style={{ fontSize: "18px" }}>
              &nbsp;&nbsp;&nbsp; Your Application ID is &nbsp;
              <h3>{this.props.match.params.formid}</h3>
            </label>
            <br />
            <br />
            <label>
              Please keep your application ID handy to be updated about your
              loan
            </label>
            <br />
          </center>
        </div>
        <br />
        <br />
        <center>
          <Link to="/customer/dashboard">
            <button
              className="ui button"
              style={{
                marginLeft: "22px",
                backgroundColor: "#990000",
                color: "white",
                width: "20vw",
              }}
            >
              BACK TO DASHBOARD
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
export default FormSuccess;
