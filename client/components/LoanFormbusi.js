import React from "react";
import axios from "axios";
import history from "../history";

class LoanFormbusi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custid: "",
      type: "",
      investment: 0,
      amt: 0,
      gname: "",
      grelation: "",
      loanid: "",
      doclink: "",
      error: {
        cid: "",
        tbusi: "",
        invest: "",
        amount: "",
        name: "",
        relation: "",
        lid: "",
        dclink: "",
      },
    };
  }

  handleValidation() {
    const {
      custid,
      type,
      investment,
      amt,
      gname,
      grelation,
      loanid,
      doclink,
    } = this.state;
    let isValid = true;
    let error = {
      cid: "",
      tbusi: "",
      invest: "",
      amount: "",
      name: "",
      relation: "",
      lid: "",
      dclink: "",
    };
    if (!custid) {
      error.cid = "We require your ID";
      isValid = false;
    }
    if (!type) {
      error.tbusi = "You need to enter type of business";
      isValid = false;
    }
    if (!investment) {
      error.invest = "You need to enter investment amount";
      isValid = false;
    }
    if (!amt) {
      error.amount = "You need to enter required amount";
      isValid = false;
    }
    if (!gname) {
      error.name = "You need to enter a gurantor name";
      isValid = false;
    }
    if (!grelation) {
      error.relation = "You need to enter a gurantor relation";
      isValid = false;
    }
    if (!loanid) {
      error.lid = "You need to enter a loan Id";
      isValid = false;
    }
    if (!doclink) {
      error.dclink = "Documents are needed for verification";
      isValid = false;
    }
    this.setState({ error: error });
    return isValid;
  }
  submitbusiform = () => {
    console.log(this.state);
    if (this.handleValidation()) {
      axios
        .post("busiloanform", {
          custid: this.state.custid,
          type: this.state.type,
          investment: this.state.investment,
          amt: this.state.amt,
          gname: this.state.gname,
          grelation: this.state.grelation,
          loanid: this.state.loanid,
          doclink: this.state.doclink,
        })
        .then(function (res) {
          if (res.data.submit) {
            console.log("inserted msg from front end");
            history.push(`./success/${res.data.fid}`);
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("there was an error!");
        });
    } else {
      console.log("there is an error in input");
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Business Loan Application Form</h2>
        <br />
        <hr />
        <br />
        <div className="ui centered grid">
          <div className="twelve wide column">
            <label>
              Enter Your Identification Number &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input" id="in">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ custid: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.cid !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.cid}</span>
            )}

            <br />
            <br />
            <label>
              Type of business
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ type: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.tbusi !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.tbusi}</span>
            )}

            <br />
            <br />
            <label>
              Investment amount &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ investment: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>

            {error.invest !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.invest}
              </span>
            )}
            <br />
            <br />
            <label>
              Amount Required &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ amt: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>

            {error.amount !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.amount}
              </span>
            )}
            <br />
            <br />
            <label>
              Enter Loan Id &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ loanid: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.lid !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.lid}</span>
            )}

            <br />
            <br />

            <label>
              Enter Gurantor Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ gname: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.name !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.name}</span>
            )}

            <br />
            <br />
            <label>
              Enter Gurantor Relation &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ grelation: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>

            {error.relation !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.relation}
              </span>
            )}
            <br />

            <br />
            <label>
              Link to required documents &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp;
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ doclink: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>

            {error.dclink !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.dclink}
              </span>
            )}
            <br />
            <br />

            <div className="ui large buttons">
              <button className="ui green button" onClick={this.submitbusiform}>
                Submit
              </button>
              <div className="or"></div>
              <button className="ui red button">Cancel</button>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>

      // <div>
      //   <h3>Business loan form </h3>
      //     <br />
      //       <br />
      //   <label>Enter Your Identification Number </label>
      //   <input
      //     placeholder="enter customer Id"
      //     onChange={(e) => this.setState({ custid: e.target.value })}
      //   />
      //   {error.cid !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.cid}</span>
      //   )}
      //   <br />
      //     <br />
      //   <label>Enter type of business </label>
      //   <input
      //     placeholder="enter type of business"
      //     onChange={(e) => this.setState({ type: e.target.value })}
      //   />
      //   {error.tbusi !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.tbusi}</span>
      //   )}
      //   <br />
      //     <br />
      //   <label>Enter Investment amount </label>
      //   <input
      //     placeholder="enter investment amount"
      //     onChange={(e) => this.setState({ investment: e.target.value })}
      //   />
      //   {error.invest !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.invest}</span>
      //   )}
      //   <br />
      //     <br />
      //   <label>Enter amount Required </label>
      //   <input
      //     placeholder="enter amount"
      //     onChange={(e) => this.setState({ amt: e.target.value })}
      //   />
      //   {error.amount !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.amount}</span>
      //   )}
      //   <br />
      //     <br />
      //   <label>Enter Your gurantor name </label>
      //   <input
      //     placeholder="enter gurantor name"
      //     onChange={(e) => this.setState({ gname: e.target.value })}
      //   />
      //   {error.name !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.name}</span>
      //   )}
      //   <br />
      //     <br />
      //   <label>Enter gurantor relation </label>
      //   <input
      //     placeholder="enter gurantor relation"
      //     onChange={(e) => this.setState({ grelation: e.target.value })}
      //   />
      //   {error.relation !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.relation}</span>
      //   )}
      //   <br />
      //   <br />
      //   <label>Enter loanID </label>
      //   <input
      //     placeholder="enter loanid"
      //     onChange={(e) => this.setState({ loanid: e.target.value })}
      //   />
      //   {error.lid !== "" && (
      //     <span style={{ color: "yellow" }}>{this.state.error.lid}</span>
      //   )}
      //   <br />
      //   <br />
      //   <br />
      //   <button onClick={this.submitbusiform}>SUBMIT</button>
      // </div>
    );
  }
}
export default LoanFormbusi;
