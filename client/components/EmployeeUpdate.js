import React from "react";
import axios from "axios";
import history from "../history";
class EmployeeUpdate extends React.Component {
  state = {
    loanid: "",
    irate: 0,
  };
  updateLoan = () => {
    axios
      .post("/updateloan", {
        loanid: this.state.loanid,
        irate: this.state.irate,
      })
      .then(function (res) {
        console.log("msg from frontend");
        console.log(res.data.auth);
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="ui centered grid">
        <div className="three wide column">
          <h3>UPDATE </h3>

          <input
            placeholder="Loan Id"
            className="sign id"
            type="id"
            onChange={(e) => this.setState({ loanid: e.target.value })}
            style={{ color: "white" }}
          />

          <br />
          <input
            placeholder="new interest rate"
            className="sign pass"
            type="pass"
            onChange={(e) => this.setState({ irate: e.target.value })}
            style={{ color: "white" }}
          />

          <br />

          <br />
          <br />
          <div className="ui large buttons">
            <button className="ui green button" onClick={this.updateLoan}>
              Update
            </button>
            <div className="or"></div>
            <button className="ui red button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
export default EmployeeUpdate;
