import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import background from "../image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

class HomePage extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1500 });
  }
  render() {
    return (
      <div>
        <div
          className="image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
          <label style={{ color: "white", fontSize: "50px", margin: "10px" }}>
            <strong>
              {" "}
              HERE TODAY <br />
              FOR YOUR TOMORROW
            </strong>
          </label>
          <br />

          <Link
            to="/custsignin"
            className="big ui button"
            style={{
              margin: "15px",
              backgroundColor: "#990000",
              color: "white",
            }}
          >
            SIGN IN
          </Link>

          <br />
          <br />
          <br />
          <br />
        </div>

        <br />

        <section id="features">
          <div className="row">
            <div
              data-aos="zoom-in"
              className="feature-box col-lg-4"
              style={{ border: "1px solid white" }}
            >
              <center>
                <i
                  className="fas fa-user-graduate fa-5x"
                  style={{ color: "#21ba45" }}
                ></i>
                <h5>EDUCATION</h5>
                <p>
                  Quality education is a must for a complete and successful
                  life. Now You can Choose Better Career Option with Education
                  Loan with Low Rate
                </p>
              </center>
            </div>
            <div
              data-aos="zoom-in"
              className="feature-box col-lg-4"
              style={{ border: "1px solid white" }}
            >
              <i
                className="fas fa-business-time fa-5x"
                style={{ color: "#21ba45" }}
              ></i>
              <h5>BUSINESS</h5>
              <p>
                With small business loans up to Rs. 30 lakh, funding for your
                small business is now just 24 hours away. A business loan is a
                loan specifically intended for business purposes.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="feature-box col-lg-4"
              style={{ border: "1px solid white" }}
            >
              <i
                className="fas fa-building fa-5x"
                style={{ color: "#21ba45" }}
              ></i>
              <h5>MORTGAGE</h5>
              <p>
                {" "}
                A mortgage is usually a loan sanctioned against an immovable
                asset like a house or a commercial property. Buy Your Dream Can
                We Help You With Lowest Interest Rate Loan In Market
              </p>
            </div>
          </div>
        </section>
        <div className="service">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="title">
                  <h1>
                    <strong className="black">Service Process</strong>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                data-aos="flip-right"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              >
                <div className="service-box">
                  <i>
                    <img
                      src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fG1vbmV5fGVufDB8fDB8&auto=format&fit=crop&w=600&q=60"
                      alt=" "
                    />
                  </i>
                  <h3>Fast service</h3>
                  <p>
                    We offer the fastest loans – with disbursal in just 48
                    hours* of your loan getting approved. Fastservice has no
                    unnecessary or redundant features, but a bit of
                    customization is required to shape the solution to your
                    needs. Use the settings to configure your service
                    management.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-right"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              >
                <div className="service-box">
                  <i>
                    <img
                      className="second"
                      alt=" "
                      src="https://images.unsplash.com/photo-1556741533-4020f1bf081c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF5bWVudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                  </i>
                  <h3>Payments</h3>
                  <p>
                    The service keeps customer payment information private from
                    the retailer by replacing the customer's credit or debit
                    card Funding Primary Account Number (FPAN) with a tokenized
                    Device Primary Account Number (DPAN), and creates a "dynamic
                    security code [...] ".
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-left"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              >
                <div className="service-box">
                  <i>
                    <img
                      alt=" "
                      src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXdvcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                  </i>
                  <h3>
                    Expert <br />
                    <br />
                    team
                  </h3>
                  <p>
                    This concept is seen within the greater framework of a team,
                    which is a group of interdependent individuals who work
                    together towards a common goal. A team includes at least 2
                    or more members, and most teams range in size from 2 to 100.
                    We provide fast and best services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
