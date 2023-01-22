import React from "react";
import axios from "axios";
import history from "../history";
//import university from "../university.jpg";
import "./EduLoanform.css";

class LoanFormEdu extends React.Component {
  state = {
    custid: "",
    clg: "",
    course: "",
    per: "",
    amt: 0,
    gname: "",
    grelation: "",
    loanid: "",
    doclink: "",
    error: {
      cid: "",
      college: "",
      percentage: "",
      cou: "",
      amount: "",
      name: "",
      relation: "",
      lid: "",
      dclink: "",
    },
  };
  handleValidation() {
    const {
      custid,
      course,
      clg,
      per,
      amt,
      gname,
      grelation,
      loanid,
      doclink,
    } = this.state;
    let isValid = true;
    let error = {
      cid: "",
      college: "",
      cou: "",
      percentage: "",
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
    if (!clg) {
      error.college = "You need to enter institue name";
      isValid = false;
    }
    if (!course) {
      error.cou = "You need to enter course";
      isValid = false;
    }
    if (!per) {
      error.percentage = "You need to enter percentage";
      isValid = false;
    }
    if (!amt) {
      error.amount = "You need to enter valid amount";
      isValid = false;
    }
    if (!gname) {
      error.name = "You need to enter a gurantor name";
      isValid = false;
    }
    if (!grelation) {
      error.relation = "You need to enter a gurantor";
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

  submitEducationForm = () => {
    console.log(this.state);
    if (this.handleValidation()) {
      axios
        .post("/loanform/edu", {
          custid: this.state.custid,
          clg: this.state.clg,
          course: this.state.course,
          per: this.state.per,
          amt: this.state.amt,
          gname: this.state.gname,
          grelation: this.state.grelation,
          loanid: this.state.loanid,
          doclink: this.state.doclink,
        })
        .then(function (res) {
          console.log(res.data.submit);
          //history.push("/dashboard");
          if (res.data.submit) {
            console.log("submitted succesfully");
            console.log(res.data.fid);
            history.push(`./success/${res.data.fid}`);
          } else {
            console.log("unsuccessfull");
            alert("unsuccessful!");
          }
        })
        .catch(function (error) {
          alert("error in submission");
          console.log(error);
        });
    } else {
      console.log("there is an error in input");
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Education Loan Application Form</h2>
        <br />
        <hr />
        <br />
        <div className="ui centered grid">
          <div className="twelve wide column">
            <label>
              Enter Your Identification Number &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;{" "}
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
              Enter Institution Name &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ clg: e.target.value })}
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
            {error.college !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.college}
              </span>
            )}

            <br />
            <br />
            <label>
              Name of enrolled course &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ course: e.target.value })}
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

            {error.cou !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.cou}</span>
            )}
            <br />
            <br />
            <label>
              Percentage in latest degree &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ per: e.target.value })}
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

            {error.percentage !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.percentage}
              </span>
            )}
            <br />
            <br />
            <label>
              Enter Loan Id &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
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
              Required Loan Amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
              Enter Gurantor Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
              Enter Gurantor Relation &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
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
            <br />
            <br />

            <div className="ui large buttons">
              <button
                className="ui green button"
                onClick={this.submitEducationForm}
              >
                Submit
              </button>
              <div className="or"></div>
              <button className="ui red button">Cancel</button>
            </div>

            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default LoanFormEdu;
