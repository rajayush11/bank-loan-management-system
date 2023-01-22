import React from "react";
import axios from "axios";
import "./EmpChangeStatus.css";
import { Link } from "react-router-dom";

class EmpChangeStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      eduformlist: [],
      busformlist: [],
      mortformlist: [],
      empid: "c101",
    };
  }

  updateStatus = (formid, status) => {
    axios
      .post("/emp/updatestatus", {
        status: status,
        empid: this.props.match.params.id,
        formid: formid,
      })
      .then(function (res) {
        //console.log(res.data);
        //history.push("/dashboard");
        if (res.data.ok) {
          console.log("done!!");
          alert("Status Changed!");
        } else {
          console.log("thats already being reviewed");
          alert("This application is already being reviewed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(formid);
    //console.log(status);
  };

  getEduLoanForms = async () => {
    console.log("get edu loan form called");
    const response = await axios.get("/emp/geteducationforms");
    console.log(response.data);
    this.setState({
      eduformlist: [...this.state.eduformlist, ...response.data],
    });
    console.log(this.state.eduformlist);
  };
  getBusLoanForms = async () => {
    console.log("get bus loan form called");
    const response = await axios.get("/emp/getbusinessforms");
    console.log(response.data);
    this.setState({
      busformlist: [...this.state.busformlist, ...response.data],
    });
    console.log(this.state.busformlist);
  };
  getMortLoanForms = async () => {
    console.log("get loan form called");
    const response = await axios.get("/emp/getmortgageforms");
    console.log(response.data);
    this.setState({
      mortformlist: [...this.state.mortformlist, ...response.data],
    });
    console.log(this.state.mortformlist);
  };

  componentDidMount() {
    this.getEduLoanForms();
    this.getBusLoanForms();
    this.getMortLoanForms();
  }
  renderEduLoanForms = () => {
    return this.state.eduformlist.map((elem) => {
      console.log(elem);
      return (
        <div
          className="card"
          key={elem.form_id}
          style={{
            margin: "15px",
            backgroundColor: "#e2e2e2",
            padding: "10px",
          }}
        >
          <div className="content">
            <a href="/#" className="ui red right ribbon label">
              EDUCATION
            </a>

            <div className="header">
              <h3>
                <i className="big user outline icon"></i>
                {elem.fname}&nbsp;&nbsp;{elem.mname}&nbsp;&nbsp;{elem.lname}
              </h3>
            </div>
            <div className="meta" style={{ padding: "35px" }}>
              <label className="ui yellow horizontal label">
                <h5 style={{ color: "black" }}>Application Number:&nbsp;</h5>
              </label>
              {elem.form_id}
            </div>
            <div
              className="ui relaxed divided list"
              style={{ fontSize: "16px", paddingLeft: "40px", color: "black" }}
            >
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Issued Loan ID:&nbsp;</h5>
                </label>
                {elem.loan_id}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Loan Name:&nbsp;</h5>
                </label>
                {elem.loan_name}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>State Of Residence:&nbsp;</h5>
                </label>
                {elem.state}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Contact Number:&nbsp;</h5>
                </label>
                {elem.phone_num}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Institution Name:&nbsp;</h5>
                </label>
                {elem.college}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Score:&nbsp;</h5>
                </label>
                {elem.percentage}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Gurantor Name:&nbsp;</h5>
                </label>
                {elem.g_name}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Gurantor Relation:&nbsp;</h5>
                </label>
                {elem.g_relation}
              </div>
            </div>
          </div>
          <br />

          <div className="extra content" style={{ paddingLeft: "35px" }}>
            <div className="ui buttons">
              <button
                className="ui blue basic button"
                id="btn"
                onClick={() => this.updateStatus(elem.form_id, "UNDER REVIEW")}
              >
                UNDER REVIEW
              </button>
              <br />
              <br />

              <button
                className="ui green basic button"
                id="btn"
                onClick={() => this.updateStatus(elem.form_id, "ACCEPTED")}
              >
                ACCEPTED
              </button>
              <br />
              <br />
              <button
                className="ui red basic button"
                id="btn"
                onClick={() => this.updateStatus(elem.form_id, "REJECTED")}
              >
                REJECTED
              </button>
            </div>
          </div>
          <hr style={{ backgroundColor: "#900C3F" }} />
        </div>
      );
    });
  };
  renderBusLoanForms = () => {
    return this.state.busformlist.map((elem) => {
      console.log(elem);
      return (
        <div
          className="card"
          key={elem.form_id}
          style={{
            margin: "15px",
            backgroundColor: "#e2e2e2",
            padding: "10px",
          }}
        >
          <div className="content">
            <a href="/#" className="ui teal right ribbon label">
              BUSSINESS
            </a>

            <div className="header">
              <h3>
                <i className="big user outline icon"></i>
                {elem.fname}&nbsp;&nbsp;{elem.mname}&nbsp;&nbsp;{elem.lname}
              </h3>
            </div>
            <div className="meta" style={{ padding: "35px" }}>
              <label className="ui yellow horizontal label">
                <h5 style={{ color: "black" }}>Application Number:&nbsp;</h5>
              </label>
              {elem.form_id}
            </div>
            <div
              className="ui relaxed divided list"
              style={{ fontSize: "16px", paddingLeft: "40px", color: "black" }}
            >
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Issued Loan ID:&nbsp;</h5>
                </label>
                {elem.loan_id}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Loan Name:&nbsp;</h5>
                </label>
                {elem.loan_name}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>State Of Residence:&nbsp;</h5>
                </label>
                {elem.state}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Contact Number:&nbsp;</h5>
                </label>
                {elem.phone_num}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Type of Business:&nbsp;</h5>
                </label>
                {elem.type_of_business}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Investment Amount&nbsp;</h5>
                </label>
                {elem.investment_amt}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Gurantor Name:&nbsp;</h5>
                </label>
                {elem.g_name}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Gurantor Relation:&nbsp;</h5>
                </label>
                {elem.g_relation}
              </div>
            </div>
          </div>
          <br />

          <div className="extra content" style={{ paddingLeft: "35px" }}>
            <div className="ui buttons">
              <button
                className="ui blue basic button"
                onClick={() => this.updateStatus(elem.form_id, "UNDER REVIEW")}
              >
                UNDER REVIEW
              </button>
              <br />
              <br />

              <button
                className="ui green basic button"
                onClick={() => this.updateStatus(elem.form_id, "ACCEPTED")}
              >
                ACCEPTED
              </button>
              <br />
              <br />
              <button
                className="ui red basic button"
                onClick={() => this.updateStatus(elem.form_id, "REJECTED")}
              >
                REJECTED
              </button>
            </div>
          </div>
          <hr style={{ backgroundColor: "#900C3F" }} />
        </div>
      );
    });
  };

  renderMortLoanForms = () => {
    return this.state.mortformlist.map((elem) => {
      console.log(elem);
      return (
        <div
          className="card"
          key={elem.form_id}
          style={{
            margin: "15px",
            backgroundColor: "#e2e2e2",
            padding: "10px",
          }}
        >
          <div className="content">
            <a href="/#" className="ui brown right ribbon label">
              MORTGAGE
            </a>

            <div className="header">
              <h3>
                <i className="big user outline icon"></i>
                {elem.fname}&nbsp;&nbsp;{elem.mname}&nbsp;&nbsp;{elem.lname}
              </h3>
            </div>
            <div className="meta" style={{ padding: "35px" }}>
              <label className="ui yellow horizontal label">
                <h5 style={{ color: "black" }}>Application Number:&nbsp;</h5>
              </label>
              {elem.form_id}
            </div>
            <div
              className="ui relaxed divided list"
              style={{ fontSize: "16px", paddingLeft: "40px", color: "black" }}
            >
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Issued Loan ID:&nbsp;</h5>
                </label>
                {elem.loan_id}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Loan Name:&nbsp;</h5>
                </label>
                {elem.loan_name}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>State Of Residence:&nbsp;</h5>
                </label>
                {elem.state}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Contact Number:&nbsp;</h5>
                </label>
                {elem.phone_num}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Location of property:&nbsp;</h5>
                </label>
                {elem.location}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Employement Status&nbsp;</h5>
                </label>
                {elem.emp_status}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Gurantor Name:&nbsp;</h5>
                </label>
                {elem.g_name}
              </div>
              <div className="item">
                <label style={{ color: "#900C3F" }}>
                  <h5>Gurantor Relation:&nbsp;</h5>
                </label>
                {elem.g_relation}
              </div>
            </div>
          </div>
          <br />

          <div className="extra content" style={{ paddingLeft: "35px" }}>
            <div className="ui buttons">
              <button
                className="ui blue basic button"
                onClick={() => this.updateStatus(elem.form_id, "UNDER REVIEW")}
              >
                UNDER REVIEW
              </button>
              <br />
              <br />

              <button
                className="ui green basic button"
                onClick={() => this.updateStatus(elem.form_id, "ACCEPTED")}
              >
                ACCEPTED
              </button>
              <br />
              <br />
              <button
                className="ui red basic button"
                onClick={() => this.updateStatus(elem.form_id, "REJECTED")}
              >
                REJECTED
              </button>
            </div>
          </div>
          <hr style={{ backgroundColor: "#900C3F" }} />
        </div>
      );
    });
  };
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <center>
          <h2>List of Application Forms</h2>
        </center>

        <Link
          to="/update/loan"
          className="ui big right floated button"
          style={{
            marginRight: "15px",
            backgroundColor: "#990000",
            color: "white",
          }}
        >
          UPDATE LOANS
        </Link>
        <Link
          to="/emp/stats"
          className="ui big left floated button"
          style={{
            marginLeft: "15px",
            backgroundColor: "#990000",
            color: "white",
          }}
        >
          SEE STATISTICS
        </Link>
        <br />
        <br />
        <div style={{ padding: "25px" }}>
          <div className="ui class" style={{ color: "black" }}>
            {this.renderEduLoanForms()}
          </div>
          <div className="ui class" style={{ color: "black" }}>
            {this.renderBusLoanForms()}
          </div>
          <div className="ui class" style={{ color: "black" }}>
            {this.renderMortLoanForms()}
          </div>
        </div>
      </div>
    );
  }
}

export default EmpChangeStatus;
