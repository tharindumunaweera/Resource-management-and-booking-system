import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
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
  constructor() {
    super();
    this.state = {
      starttime: "",
      endtime: "",
      reason: "",
      hall: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const startTime = [
      { label: "Start Time", value: 0 },
      { label: "8 a.m", value: "8 a.m" },
      { label: "8.30 a.m", value: "8.30 a.m" },
      { label: "9 a.m", value: "9 a.m" },
      { label: "9.30 a.m", value: "9.30 a.m" },
      { label: "10 a.m", value: "10 a.m" },
      { label: "10.30 a.m", value: "10.30 a.m" },
      { label: "11 a.m", value: "11 a.m" },
      { label: "11.30 a.m", value: "11.30 a.m" },
      { label: "12 p.m", value: "12 p.m" },
      { label: "12.30 p.m", value: "12.30 p.m" },
      { label: "1 p.m", value: "1 p.m" },
      { label: "1.30 p.m", value: "1.30 p.m" },
      { label: "2 p.m", value: "2 p.m" },
      { label: "2.30 p.m", value: "2.30 p.m" },
      { label: "3 p.m", value: "3 p.m" },
      { label: "3.30 p.m", value: "3.30 p.m" },
      { label: "4 p.m", value: "4 p.m" },
      { label: "4.30 p.m", value: "4.30 p.m" },
      { label: "5 p.m", value: "5 p.m" }
    ];

    const endTime = [
      { label: "End Time", value: 0 },
      { label: "8.30 a.m", value: "8.30 a.m" },
      { label: "9 a.m", value: "9 a.m" },
      { label: "9.30 a.m", value: "9.30 a.m" },
      { label: "10 a.m", value: "10 a.m" },
      { label: "10.30 a.m", value: "10.30 a.m" },
      { label: "11 a.m", value: "11 a.m" },
      { label: "11.30 a.m", value: "11.30 a.m" },
      { label: "12 p.m", value: "12 p.m" },
      { label: "12.30 p.m", value: "12.30 p.m" },
      { label: "1 p.m", value: "1 p.m" },
      { label: "1.30 p.m", value: "1.30 p.m" },
      { label: "2 p.m", value: "2 p.m" },
      { label: "2.30 p.m", value: "2.30 p.m" },
      { label: "3 p.m", value: "3 p.m" },
      { label: "3.30 p.m", value: "3.30 p.m" },
      { label: "4 p.m", value: "4 p.m" },
      { label: "4.30 p.m", value: "4.30 p.m" },
      { label: "5 p.m", value: "5 p.m" }
    ];
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
          <div className="col-sm-3">
            <h4 className="mb-2">Make a Booking</h4>
            <li className="list-group-item">
              <SelectListGroup
                placeholder="Start Time"
                name="starttime"
                value={this.state.starttime}
                onChange={this.onChange}
                options={startTime}
              />
            </li>

            <li className="list-group-item">
              <SelectListGroup
                placeholder="End Time"
                name="endtime"
                value={this.state.endtime}
                onChange={this.onChange}
                options={endTime}
              />
            </li>

            <li className="list-group-item">
              <TextFieldGroup
                placeholder="Hall"
                name="hall"
                value={this.state.hall}
                onChange={this.onChange}
              />
            </li>

            <li className="list-group-item">
              <TextAreaFieldGroup
                placeholder="What the Reason for booking"
                name="reason"
                value={this.state.reason}
                onChange={this.onChange}
              />
            </li>

            <input
              type="submit"
              value="Submit"
              className="btn btn-info btn-block mt-4"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AvailableLoad;
