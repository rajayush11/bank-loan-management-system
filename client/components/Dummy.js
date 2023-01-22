import React from "react";
import { Link } from "react-router-dom";

class Dummy extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui four column centered grid">
          <div className="column" style={{ marginTop: "80px" }}>
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
            <br />
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
          </div>
        </div>
      </div>
    );
  }
}
export default Dummy;
