import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { createEleven } from "../../actions/elevenActions";

class CreateEleven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Meleventotwelve: "",
      Meleventoone: "",
      Meleventotwo: "",
      Meleventothree: "",
      Meleventofour: "",
      Meleventofive: "",

      Televentotwelve: "",
      Televentoone: "",
      Televentotwo: "",
      Televentothree: "",
      Televentofour: "",
      Televentofive: "",

      Weleventotwelve: "",
      Weleventoone: "",
      Weleventotwo: "",
      Weleventothree: "",
      Weleventofour: "",
      Weleventofive: "",

      THeleventotwelve: "",
      THeleventoone: "",
      THeleventotwo: "",
      THeleventothree: "",
      THeleventofour: "",
      THeleventofive: "",

      Feleventotwelve: "",
      Feleventoone: "",
      Feleventotwo: "",
      Feleventothree: "",
      Feleventofour: "",
      Feleventofive: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const elevenData = {
      Meleventotwelve: this.state.Meleventotwelve,
      Meleventoone: this.state.Meleventoone,
      Meleventotwo: this.state.Meleventotwo,
      Meleventothree: this.state.Meleventothree,
      Meleventofour: this.state.Meleventofour,
      Meleventofive: this.state.Meleventofive,

      Televentotwelve: this.state.Televentotwelve,
      Televentoone: this.state.Televentoone,
      Televentotwo: this.state.Televentotwo,
      Televentothree: this.state.Televentothree,
      Televentofour: this.state.Televentofour,
      Televentofive: this.state.Televentofive,

      Weleventotwelve: this.state.Weleventotwelve,
      Weleventoone: this.state.Weleventoone,
      Weleventotwo: this.state.Weleventotwo,
      Weleventothree: this.state.Weleventothree,
      Weleventofour: this.state.Weleventofour,
      Weleventofive: this.state.Weleventofive,

      THeleventotwelve: this.state.THeleventotwelve,
      THeleventoone: this.state.THeleventoone,
      THeleventotwo: this.state.THeleventotwo,
      THeleventothree: this.state.THeleventothree,
      THeleventofour: this.state.THeleventofour,
      THeleventofive: this.state.THeleventofive,

      Feleventotwelve: this.state.Feleventotwelve,
      Feleventoone: this.state.Feleventoone,
      Feleventotwo: this.state.Feleventotwo,
      Feleventothree: this.state.Feleventothree,
      Feleventofour: this.state.Feleventofour,
      Feleventofive: this.state.Feleventofive
    };

    this.props.createEleven(elevenData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // Select options for status

    return (
      <div className="create-nine">
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
                <th scope="row">11.00-12.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventotwelve"
                    value={this.state.Meleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentotwelve"
                    value={this.state.Televentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventotwelve"
                    value={this.state.Weleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventotwelve"
                    value={this.state.THeleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventotwelve"
                    value={this.state.Feleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">11.00-1.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventoone"
                    value={this.state.Meleventoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentoone"
                    value={this.state.Televentoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventoone"
                    value={this.state.Weleventoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventoone"
                    value={this.state.THeleventoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventoone"
                    value={this.state.Feleventoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">11.00-2.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventotwo"
                    value={this.state.Meleventotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentotwo"
                    value={this.state.Televentotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventotwo"
                    value={this.state.Weleventotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventotwo"
                    value={this.state.THeleventotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventotwo"
                    value={this.state.Feleventotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">11.00-3.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventothree"
                    value={this.state.Meleventothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentothree"
                    value={this.state.Televentothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventothree"
                    value={this.state.Weleventothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventothree"
                    value={this.state.THeleventothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventothree"
                    value={this.state.Feleventothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">11.00-4.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventofour"
                    value={this.state.Meleventofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentofour"
                    value={this.state.Televentofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventofour"
                    value={this.state.Weleventofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventofour"
                    value={this.state.THeleventofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventofour"
                    value={this.state.Feleventofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">11.00-5.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventofive"
                    value={this.state.Meleventofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentofive"
                    value={this.state.Televentofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventofive"
                    value={this.state.Weleventofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventofive"
                    value={this.state.THeleventofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventofive"
                    value={this.state.Feleventofive}
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

CreateEleven.propTypes = {
  eleven: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eleven: state.eleven
});

export default connect(
  mapStateToProps,
  { createEleven }
)(withRouter(CreateEleven));
