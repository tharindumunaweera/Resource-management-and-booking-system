import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createTha } from "../../actions/thaActions";

class CreateTha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      Meighttonine: "",
      Meighttoten: "",
      Meighttoeleven: "",
      Meighttotwelve: "",
      Meighttoone: "",
      Meighttotwo: "",
      Meighttothree: "",
      Meighttofour: "",
      Meighttofive: "",
      Teighttonine: "",
      Teighttoten: "",
      Teighttoeleven: "",
      Teighttotwelve: "",
      Teighttoone: "",
      Teighttotwo: "",
      Teighttothree: "",
      Teighttofour: "",
      Teighttofive: "",
      Weighttonine: "",
      Weighttoten: "",
      Weighttoeleven: "",
      Weighttotwelve: "",
      Weighttoone: "",
      Weighttotwo: "",
      Weighttothree: "",
      Weighttofour: "",
      Weighttofive: "",
      THeighttonine: "",
      THeighttoten: "",
      THeighttoeleven: "",
      THeighttotwelve: "",
      THeighttoone: "",
      THeighttotwo: "",
      THeighttothree: "",
      THeighttofour: "",
      THeighttofive: "",
      Feighttonine: "",
      Feighttoten: "",
      Feighttoeleven: "",
      Feighttotwelve: "",
      Feighttoone: "",
      Feighttotwo: "",
      Feighttothree: "",
      Feighttofour: "",
      Feighttofive: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      skills: this.state.skills,
      Meighttonine: this.state.Meighttonine,
      Meighttoten: this.state.Meighttoten,
      Meighttoeleven: this.state.Meighttoeleven,
      Meighttotwelve: this.state.Meighttotwelve,
      Meighttoone: this.state.Meighttoone,
      Meighttotwo: this.state.Meighttotwo,
      Meighttothree: this.state.Meighttothree,
      Meighttofour: this.state.Meighttofour,
      Meighttofive: this.state.Meighttofive,
      Teighttonine: this.state.Teighttonine,
      Teighttoten: this.state.Teighttoten,
      Teighttoeleven: this.state.Teighttoeleven,
      Teighttotwelve: this.state.Teighttotwelve,
      Teighttoone: this.state.Teighttoone,
      Teighttotwo: this.state.Teighttotwo,
      Teighttothree: this.state.Teighttothree,
      Teighttofour: this.state.Teighttofour,
      Teighttofive: this.state.Teighttofive,
      Weighttonine: this.state.Weighttonine,
      Weighttoten: this.state.Weighttoten,
      Weighttoeleven: this.state.Weighttoeleven,
      Weighttotwelve: this.state.Weighttotwelve,
      Weighttoone: this.state.Weighttoone,
      Weighttotwo: this.state.Weighttotwo,
      Weighttothree: this.state.Weighttothree,
      Weighttofour: this.state.Weighttofour,
      Weighttofive: this.state.Weighttofive,

      THeighttonine: this.state.THeighttonine,
      THeighttoten: this.state.THeighttoten,
      THeighttoeleven: this.state.THeighttoeleven,
      THeighttotwelve: this.state.THeighttotwelve,
      THeighttoone: this.state.THeighttoone,
      THeighttotwo: this.state.THeighttotwo,
      THeighttothree: this.state.THeighttothree,
      THeighttofour: this.state.THeighttofour,
      THeighttofive: this.state.THeighttofive,

      Feighttonine: this.state.Feighttonine,
      Feighttoten: this.state.Feighttoten,
      Feighttoeleven: this.state.Feighttoeleven,
      Feighttotwelve: this.state.Feighttotwelve,
      Feighttoone: this.state.Feighttoone,
      Feighttotwo: this.state.Feighttotwo,
      Feighttothree: this.state.Feighttothree,
      Feighttofour: this.state.Feighttofour,
      Feighttofive: this.state.Feighttofive
    };

    this.props.createTha(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="create-profile">
        <h1 className="display-4 text-center">Create Your Profile</h1>
        <p className="lead text-center">
          Let's get some information to make profile
        </p>
        <small className="d-block pb-3">* = required fields</small>
        <form onSubmit={this.onSubmit}>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">time</th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wenesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
              </tr>
            </thead>
            <tbody>
              {/* <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                /> */}
              <tr>
                <th scope="row">8.00-9.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttonine"
                    value={this.state.Meighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttonine"
                    value={this.state.Teighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttonine"
                    value={this.state.Weighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttonine"
                    value={this.state.THeighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttonine"
                    value={this.state.Feighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-10.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttoten"
                    value={this.state.Meighttoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttoten"
                    value={this.state.Teighttoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttoten"
                    value={this.state.Weighttoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttoten"
                    value={this.state.THeighttoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttoten"
                    value={this.state.Feighttoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-11.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttoeleven"
                    value={this.state.Meighttoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttoeleven"
                    value={this.state.Teighttoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttoeleven"
                    value={this.state.Weighttoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttoeleven"
                    value={this.state.THeighttoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttoeleven"
                    value={this.state.Feighttoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-12.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttotwelve"
                    value={this.state.Meighttotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttotwelve"
                    value={this.state.Teighttotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttotwelve"
                    value={this.state.Weighttotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttotwelve"
                    value={this.state.THeighttotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttotwelve"
                    value={this.state.Feighttotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-1.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttoone"
                    value={this.state.Meighttoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttoone"
                    value={this.state.Teighttoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttoone"
                    value={this.state.Weighttoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttoone"
                    value={this.state.THeighttoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttoone"
                    value={this.state.Feighttoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-2.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttotwo"
                    value={this.state.Meighttotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttotwo"
                    value={this.state.Teighttotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttotwo"
                    value={this.state.Weighttotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttotwo"
                    value={this.state.THeighttotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttotwo"
                    value={this.state.Feighttotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-3.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttothree"
                    value={this.state.Meighttothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttothree"
                    value={this.state.Teighttothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttothree"
                    value={this.state.Weighttothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttothree"
                    value={this.state.THeighttothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttothree"
                    value={this.state.Feighttothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-4.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttofour"
                    value={this.state.Meighttofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttofour"
                    value={this.state.Teighttofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttofour"
                    value={this.state.Weighttofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttofour"
                    value={this.state.THeighttofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttofour"
                    value={this.state.Feighttofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">8.00-5.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttofive"
                    value={this.state.Meighttofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttofive"
                    value={this.state.Teighttofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttofive"
                    value={this.state.Weighttofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttofive"
                    value={this.state.THeighttofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttofive"
                    value={this.state.Feighttofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    );
  }
}

CreateTha.propTypes = {
  createTha: PropTypes.func.isRequired,
  tha: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tha: state.tha
});

export default connect(
  mapStateToProps,
  { createTha }
)(withRouter(CreateTha));
