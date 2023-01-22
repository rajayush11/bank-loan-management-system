import React from "react";
import stats from "../stats.mp4";
import axios from "axios";

class EmpStats extends React.Component {
  state = {
    category: "",
    college: "",
    stateName: "",
    display: "none",
    res: [],
    con: 0,
    type: "",
  };

  changeDisplay = (category) => {
    console.log(category);
    if (category === "state") {
      this.setState({ display: "state" });
    } else if (category === "college") {
      this.setState({ display: "college" });
    }
  };

  renderStateDetails = async () => {
    console.log(this.state.stateName);
    const response = await axios.post("/emp/stat/state", {
      stateName: this.state.stateName,
    });
    console.log(response.data);
    if (response.data.result.length > 0) {
      this.setState({
        res: response.data.result,
      });
      console.log(this.state.res[0].customerId);
      this.setState({
        con: response.data.count,
        display: "sta",
      });
      console.log(this.state.con);
    } else {
      alert("No result found :(");
    }
  };

  renderCollegeDetails = async () => {
    console.log(this.state.college);
    const response = await axios.post("/emp/stat/college", {
      collegeName: this.state.college,
    });
    console.log(response.data);
    if (response.data.result.length > 0) {
      this.setState({
        res: response.data.result,
      });

      console.log(this.state.res[0].customerId);
      this.setState({
        con: response.data.count,
        display: "coll",
      });
      console.log(this.state.con);
      console.log(this.state.type);
    } else {
      alert("No result Found :(");
    }
  };
  displayCollegeDetails = () => {
    return this.state.res.map((elem) => {
      console.log(elem);
      return (
        <table class="ui selectable inverted table">
          <tbody>
            <tr key={elem.customerId}>
              <td>{elem.customerId}</td>
              <td>{elem.CaccountNo}</td>
              <td>{elem.fname}</td>
              <td className="right aligned">{elem.mname}</td>
              <td className="right aligned">{elem.lname}</td>

              <td class="right aligned">{elem.state}</td>
              <td class="right aligned">{elem.college}</td>
            </tr>
          </tbody>
        </table>
      );
    });
  };
  displayStateDetails = () => {
    return this.state.res.map((elem) => {
      console.log(elem);
      return (
        <table class="ui selectable inverted table">
          <tbody>
            <tr key={elem.customerId}>
              <td>{elem.customerId}</td>
              <td>{elem.CaccountNo}</td>
              <td>{elem.fname}</td>
              <td>{elem.mname}</td>
              <td className="right aligned">{elem.lname}</td>
              <td className="right aligned">{elem.state}</td>
            </tr>
          </tbody>
        </table>
      );
    });
  };

  render() {
    if (this.state.display === "none") {
      return (
        <div className="ui container">
          <h1 style={{ textAlign: "center", color: "#39ff14" }}>
            Service Statistics
          </h1>
          <br />
          <br />
          <div className="ui grid">
            <div className="eight wide column">
              <h4>Choose a catgeory</h4>
              <br />
              <input
                placeholder="enter category"
                onChange={(e) => this.setState({ category: e.target.value })}
                className="sign id"
                type="id"
                style={{ color: "white" }}
              />
              <br />
              <button
                className="ui green button"
                onClick={() => this.changeDisplay(this.state.category)}
              >
                Submit
              </button>
            </div>
            <div className="eight wide column">
              <div style={{ margin: "10px" }}>
                <video width="120%" height="120%" autoPlay={true} loop>
                  <source src={stats} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
    if (this.state.display === "state") {
      return (
        <div className="ui container">
          <h4 style={{ color: "#39ff14" }}>Enter the state name</h4>
          <br />
          <input
            placeholder="enter text here"
            className="sign id"
            type="id"
            style={{ color: "white" }}
            onChange={(e) => this.setState({ stateName: e.target.value })}
          />
          <br />
          <button
            className="ui large green button"
            onClick={this.renderStateDetails}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
    if (this.state.display === "college") {
      return (
        <div className="ui container">
          <h4 style={{ color: "#39ff14" }}>Enter the college name</h4>
          <br />
          <input
            placeholder="enter text here"
            className="sign id"
            type="id"
            style={{ color: "white" }}
            onChange={(e) => this.setState({ college: e.target.value })}
          />
          <br />
          <button
            className="ui large green button"
            onClick={this.renderCollegeDetails}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
    if (this.state.display === "coll") {
      return (
        <div className="ui container">
          <h1 style={{ textAlign: "center", color: "#39ff14" }}>
            Service Statistics
          </h1>
          <br />
          <h2>
            The count of customers &nbsp;: &nbsp; &nbsp; &nbsp;{this.state.con}
          </h2>
          <table class="ui selectable inverted table">
            <thead>
              <th>
                <label style={{ color: "#39ff14" }}>CUSTOMER ID</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>ACCOUNT NO</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>FIRST NAME</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>MIDDLE NAME</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>LAST NAME</label>
              </th>

              <th>
                <label style={{ color: "#39ff14" }}>STATE</label>
              </th>
              <th class="right aligned">
                <label style={{ color: "#39ff14" }}>COLLEGE</label>
              </th>
            </thead>
          </table>
          <br />
          {this.displayCollegeDetails()}
        </div>
      );
    }
    if (this.state.display === "sta") {
      return (
        <div className="ui container">
          <h1 style={{ textAlign: "center", color: "#39ff14" }}>
            Service Statistics
          </h1>
          <br />
          <h2>The count of customers: &nbsp; &nbsp; &nbsp;{this.state.con}</h2>
          <br />
          <table class="ui selectable inverted table">
            <thead>
              <th>
                <label style={{ color: "#39ff14" }}>CUSTOMER ID</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>ACCOUNT NO</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>FIRST NAME</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>MIDDLE NAME</label>
              </th>
              <th>
                <label style={{ color: "#39ff14" }}>LAST NAME</label>
              </th>

              <th className="right aligned">
                <label style={{ color: "#39ff14" }}>STATE</label>
              </th>
            </thead>
          </table>
          {this.displayStateDetails()}
        </div>
      );
    }
  }
}

export default EmpStats;
