import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import AcadamicNoti from "../XXX/AcadamicNoti";

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

class Acadamic extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-0">
            <br />

            {/* <div class="card ">
              <div class="card-header">
                <a href="#" onClick={this._onButtonClick} className="nav-link">
                  <i class="fas fa-bell " />
                </a>
                {this.state.showComponent ? <AcadamicNoti /> : null}
              </div>
            </div> */}
            <input
              type="button"
              className="btn btn-block btn-primary "
              value="button"
              onClick={this._onButtonClick}
            />
            {this.state.showComponent ? <AcadamicNoti /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Acadamic;
