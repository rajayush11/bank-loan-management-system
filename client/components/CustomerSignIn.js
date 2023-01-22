import React from "react";
import history from "../history";
import axios from "axios";
import "./sgin.css";

class CustomerSignIn extends React.Component {
  state = {
    customerId: 0,
    password: "",
    account: "",
    error: { custid: "", pass: "", acc: "" },
  };
  handleValidation() {
    const { customerId, password, account } = this.state;
    let isValid = true;
    let error = { custid: "", pass: "", acc: "" };
    if (!customerId) {
      error.custid = "We require your ID";
      isValid = false;
    }
    if (!password) {
      error.pass = "You need to enter a password";
      isValid = false;
    }

    if (!account) {
      error.acc = "You need to have an account";
      isValid = false;
    }
    this.setState({ error: error });
    return isValid;
  }
  handleSignIn = () => {
    console.log("function called");
    if (this.handleValidation()) {
      axios
        .post("/customersignin", {
          id: this.state.customerId,
          password: this.state.password,
          account: this.state.account,
        })
        .then(function (res) {
          console.log(res.data.auth);
          //history.push("/dashboard");
          if (res.data.auth) {
            console.log("you have succesfully signed in");
            history.push("/customer/dashboard");
          } else {
            console.log("unsucessfull login");
            alert("wrong credentials! try again");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("there was an error");
        });
    } else {
      console.log("there is error in input");
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="ui centered grid">
        <div className="three wide column">
          <center>
            <i
              className="fas fa-hand-holding-usd fa-5x"
              style={{ color: "white" }}
            ></i>
          </center>
          <h3>Sign In </h3>

          <input
            placeholder="enter customer Id"
            onChange={(e) => this.setState({ customerId: e.target.value })}
            className="sign id"
            type="id"
            style={{ color: "white" }}
          />
          {error.custid !== "" && (
            <span style={{ color: "yellow" }}>{this.state.error.custid}</span>
          )}
          <br />
          <input
            placeholder="enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
            className="sign pass"
            type="pass"
            style={{ color: "white" }}
          />
          {error.pass !== "" && (
            <span style={{ color: "yellow" }}>{this.state.error.pass}</span>
          )}
          <br />
          <input
            placeholder="enter account number"
            onChange={(e) => this.setState({ account: e.target.value })}
            className="sign ac"
            type="ac"
            style={{ color: "white" }}
          />
          {error.acc !== "" && (
            <span style={{ color: "yellow" }}>{this.state.error.acc}</span>
          )}
          <br />

          <br />

          <div className="ui large buttons">
            <button className="ui green button" onClick={this.handleSignIn}>
              Sign In
            </button>
            <div className="or"></div>
            <button className="ui red button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomerSignIn;
