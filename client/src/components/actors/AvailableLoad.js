import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class AvailableLoad extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-4">
            <h4 className="mb-2">Date</h4>
            <li className="list-group-item">
              <table className="table">
                <thead>
                  <tr>
                    <th>Time</th>

                    <th>Availability</th>

                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>8 - 10 a.m</strong>
                    </td>

                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>10 - 12 a.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>1 - 3 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>3 - 5 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AvailableLoad;
