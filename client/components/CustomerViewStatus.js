import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CustomerViewStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formid: 0, status: [], exist: "display" };
  }

  getstatus = async () => {
    console.log(this.state.formid);
    console.log("function called");
    const response = await axios.post("/viewstatus", {
      formid: this.state.formid,
    });
    console.log(response.data);
    // .then(function(res){
    if (response.data.exist === "error") {
      console.log("database error");
      this.setState({ exist: response.data.exist });
    } else if (response.data.exist === "invalid") {
      console.log("form id is invalid");
      this.setState({ exist: response.data.exist });
    } else if (response.data.exist === "not seen") {
      console.log("not viewed application");
      this.setState({ exist: response.data.exist });
    } else if (response.data.exist === "pay") {
      console.log("Already paid");
      this.setState({ exist: response.data.exist });
    } else {
      this.setState({
        exist: "status",
        status: [...this.state.status, ...response.data],
      });
      console.log(this.state.status);
    }

    // this.setState({
    //   lid:response.data[0].loan_id,
    //   form: [...this.state.status,...response.data],
    // });
    // console.log(this.state.status);
  };
  renderstatus = () => {
    console.log("called");

    return this.state.status.map((elem) => {
      console.log(elem);
      return (
        <div key={elem.status}>
          <table class="ui fixed table">
            <tbody>
              <tr>
                <td>{elem.form_id}</td>
                <td>{elem.status}</td>
                <td class="negative">{elem.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  };

  displayError = () => {
    return (
      <div>
        <h2>There was an error</h2>
      </div>
    );
  };
  render() {
    if (this.state.exist === "display") {
      return (
        <div className="ui centered grid">
          <div className="six wide column">
            <label>
              <h2>Enter Formid &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h2>{" "}
            </label>
            <div class="ui corner labeled input">
              <input
                onChange={(e) => this.setState({ formid: e.target.value })}
                style={{
                  width: "15vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                  marginTop: "50px",
                }}
              />
              <div
                class="ui corner label"
                style={{
                  marginTop: "50px",
                }}
              >
                <i class="asterisk icon"></i>
              </div>
            </div>
            <br />
            <br />
            <center>
              <div className="ui large buttons">
                <button
                  className="ui green button"
                  onClick={this.getstatus}
                  style={{
                    marginTop: "50px",
                  }}
                >
                  Submit
                </button>
                <div
                  className="or"
                  style={{
                    marginTop: "50px",
                  }}
                ></div>
                <button
                  className="ui red button"
                  style={{
                    marginTop: "50px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </center>
            <br />
            <br />
            <br />
          </div>
        </div>
      );
    }
    if (this.state.exist === "invalid") {
      return (
        <div class="ui negative message">
          <i class="close icon"></i>
          <center>
            <h2>
              OOPS🤦‍
              <br />
              <br />
              Form ID is invalid
            </h2>
          </center>
        </div>
      );
    } else if (this.state.exist === "not seen") {
      return (
        <div class="ui yellow message">
          <i class="close icon"></i>
          <div class="header">
            <h3>Your Application is not yet viewed!</h3>
          </div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Your application's status will be updated soon
          </p>
        </div>
      );
    } else if (this.state.exist === "pay") {
      return (
        <div class="ui green message">
          <i class="close icon"></i>
          <center>
            <h2>You have already paid the total laon amount😁‍</h2>
            <br />
            <br />
            <p>For further information contact bank</p>
          </center>
        </div>
      );
    } else if (this.state.exist === "status") {
      console.log("else part");
      return (
        <div className="ui container">
          <table class="ui fixed table">
            <thead>
              <tr>
                <th>Form ID</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
          </table>
          {this.renderstatus()}
          <br />
          <br />
          <Link to="/customer/dashboard">
            <button
              className="ui right floated button"
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
          <br />
          <br />
          <br />
        </div>
      );
    }
  }
}
export default CustomerViewStatus;
