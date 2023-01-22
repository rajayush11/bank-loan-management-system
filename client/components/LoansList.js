import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EduLoanform.css";

class LoansList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edloans: [], busloans: [], mortloans: [] };
  }

  componentDidMount() {
    this.getEduLoans();
    this.getBusLoans();
    this.getMortLoans();
  }
  getEduLoans = async () => {
    console.log("function called");
    const response = await axios.get("/edu/loans");
    console.log(response.data);
    this.setState({
      edloans: [...this.state.edloans, ...response.data],
    });
    console.log(this.state.edloans);
  };

  getBusLoans = async () => {
    console.log("function called");
    const response = await axios.get("/business/loans");
    console.log(response.data);
    this.setState({
      busloans: [...this.state.busloans, ...response.data],
    });
    console.log(this.state.busloans);
  };

  getMortLoans = async () => {
    console.log("function called");
    const response = await axios.get("/mortgage/loans");
    console.log(response.data);
    this.setState({
      mortloans: [...this.state.mortloans, ...response.data],
    });
    console.log(this.state.mortloans);
  };

  // renderEducationList = () => {
  //   return this.state.edloans.map((elem) => {
  //     console.log(elem);
  //     return (
  //       <div
  //         className="item"
  //         style={{ backgroundColor: "grey" }}
  //         key={elem.loan_id}
  //       >
  //         <h2>{elem.loan_name}</h2>
  //         <br />
  //         This loan is provided for student admiited in the {elem.course} and
  //         having percentage gretaer than {elem.percentage}
  //         <br />
  //         the interest rate is {elem.i_rate}
  //         <br />
  //         the penlaity rate id {elem.p_rate}
  //         <br />
  //         <hr />
  //       </div>
  //     );
  //   });
  // };

  renderEducationList = () => {
    return this.state.edloans.map((elem) => {
      console.log(elem);
      return (
        <tr className="top aligned" key={elem.loan_id}>
          <td>
            <h4>{elem.loan_id}</h4>
          </td>
          <td>
            <h4>{elem.loan_name}</h4>
          </td>
          <td className="top aligned">
            <label>Course Name:</label> {elem.course}
            <br />
            <label>Scheme year:</label>
            {elem.year}
            <br />
            <label>Interest Rate:</label>
            {elem.i_rate}%
            <br />
            <label>Penalty Rate:</label>
            {elem.p_rate}%
            <br />
            <label>Required percentage:</label>
            {elem.percentage}
            <br />
          </td>
        </tr>
      );
    });
  };

  renderBusinessList = () => {
    return this.state.busloans.map((elem) => {
      //console.log(elem);

      return (
        <tr className="top aligned" key={elem.loan_id}>
          <td>
            <h4>{elem.loan_id}</h4>
          </td>
          <td>
            <h4>{elem.loan_name}</h4>
          </td>
          <td className="top aligned">
            <label>Scheme year:</label>
            {elem.year}
            <br />
            <label>Interest Rate:</label>
            {elem.i_rate}%
            <br />
            <label>Penalty Rate:</label>
            {elem.p_rate}%
            <br />
            <label>Type of Business:</label>
            {elem.type}
            <br />
          </td>
        </tr>
      );
    });
  };

  renderMortgageList = () => {
    return this.state.mortloans.map((elem) => {
      //console.log(elem);

      return (
        <tr className="top aligned" key={elem.loan_id}>
          <td>
            <h4>{elem.loan_id}</h4>
          </td>
          <td>
            <h4>{elem.loan_name}</h4>
          </td>
          <td className="top aligned">
            <label>Scheme year:</label>
            {elem.year}
            <br />
            <label>Interest Rate:</label>
            {elem.i_rate}%
            <br />
            <label>Penalty Rate:</label>
            {elem.p_rate}%
            <br />
            <label>Minimum Salary:</label>
            {elem.min_salary}
            <br />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h2>
          <center>LOAN SCHEMES</center>
        </h2>
        <br />

        <div>
          <label style={{ fontSize: "30px", margin: "10px" }}>
            Education Loans
          </label>

          <Link to="/educationform">
            <button className="ui huge inverted green button">APPLY</button>
          </Link>
        </div>
        <br />
        <br />
        <div style={{ margin: "15px" }}>
          <table
            className="ui striped table"
            style={{ backgroundColor: "#4c0000", color: "white" }}
          >
            <thead>
              <tr>
                <th>
                  <h5>LOAN_ID</h5>
                </th>
                <th>
                  <h5>NAME</h5>
                </th>
                <th>
                  <h5>DETAILS</h5>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderEducationList()}</tbody>
          </table>
        </div>

        <div>
          <label style={{ fontSize: "30px", margin: "10px" }}>
            Business Loans
          </label>

          <Link to="/businessform">
            <button className="ui huge inverted green button">APPLY</button>
          </Link>
        </div>
        <br />
        <br />
        <div style={{ margin: "15px" }}>
          <table
            className="ui striped table"
            style={{ backgroundColor: "#4c0000", color: "white" }}
          >
            <thead>
              <tr>
                <th>
                  <h5>LOAN_ID</h5>
                </th>
                <th>
                  <h5>NAME</h5>
                </th>
                <th>
                  <h5>DETAILS</h5>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderBusinessList()}</tbody>
          </table>
        </div>
        <br />
        <br />
        <div>
          <label style={{ fontSize: "30px", margin: "10px" }}>
            Mortgage Loans
          </label>

          <Link to="/mortgageform">
            <button className="ui huge inverted green button">APPLY</button>
          </Link>
        </div>
        <br />
        <br />
        <div style={{ margin: "15px" }}>
          <table
            className="ui striped table"
            style={{ backgroundColor: "#4c0000", color: "white" }}
          >
            <thead>
              <tr>
                <th>
                  <h5>LOAN_ID</h5>
                </th>
                <th>
                  <h5>NAME</h5>
                </th>
                <th>
                  <h5>DETAILS</h5>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderMortgageList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default LoansList;
