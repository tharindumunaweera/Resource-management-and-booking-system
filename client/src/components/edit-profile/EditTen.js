import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { createTen, getCurrentTen } from "../../actions/tenActions";

class CreateTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mtentoeleven: "",
      Mtentotwelve: "",
      Mtentoone: "",
      Mtentotwo: "",
      Mtentothree: "",
      Mtentofour: "",
      Mtentofive: "",

      Ttentoeleven: "",
      Ttentotwelve: "",
      Ttentoone: "",
      Ttentotwo: "",
      Ttentothree: "",
      Ttentofour: "",
      Ttentofive: "",

      Wtentoeleven: "",
      Wtentotwelve: "",
      Wtentoone: "",
      Wtentotwo: "",
      Wtentothree: "",
      Wtentofour: "",
      Wtentofive: "",

      THtentoeleven: "",
      THtentotwelve: "",
      THtentoone: "",
      THtentotwo: "",
      THtentothree: "",
      THtentofour: "",
      THtentofive: "",

      Ftentoeleven: "",
      Ftentotwelve: "",
      Ftentoone: "",
      Ftentotwo: "",
      Ftentothree: "",
      Ftentofour: "",
      Ftentofive: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentTen();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ten.ten) {
      const ten = nextProps.ten.ten;

      const MtentoelevenCSV = ten.Mtentoeleven.join(",");
      const MtentotwelveCSV = ten.Mtentotwelve.join(",");
      const MtentooneCSV = ten.Mtentoone.join(",");
      const MtentotwoCSV = ten.Mtentotwo.join(",");
      const MtentothreeCSV = ten.Mtentothree.join(",");
      const MtentofourCSV = ten.Mtentofour.join(",");
      const MtentofiveCSV = ten.Mtentofive.join(",");

      const TtentoelevenCSV = ten.Ttentoeleven.join(",");
      const TtentotwelveCSV = ten.Ttentotwelve.join(",");
      const TtentooneCSV = ten.Ttentoone.join(",");
      const TtentotwoCSV = ten.Ttentotwo.join(",");
      const TtentothreeCSV = ten.Ttentothree.join(",");
      const TtentofourCSV = ten.Ttentofour.join(",");
      const TtentofiveCSV = ten.Ttentofive.join(",");

      const WtentoelevenCSV = ten.Wtentoeleven.join(",");
      const WtentotwelveCSV = ten.Wtentotwelve.join(",");
      const WtentooneCSV = ten.Wtentoone.join(",");
      const WtentotwoCSV = ten.Wtentotwo.join(",");
      const WtentothreeCSV = ten.Wtentothree.join(",");
      const WtentofourCSV = ten.Wtentofour.join(",");
      const WtentofiveCSV = ten.Wtentofive.join(",");

      const THtentoelevenCSV = ten.THtentoeleven.join(",");
      const THtentotwelveCSV = ten.THtentotwelve.join(",");
      const THtentooneCSV = ten.THtentoone.join(",");
      const THtentotwoCSV = ten.THtentotwo.join(",");
      const THtentothreeCSV = ten.THtentothree.join(",");
      const THtentofourCSV = ten.THtentofour.join(",");
      const THtentofiveCSV = ten.THtentofive.join(",");

      const FtentoelevenCSV = ten.Ftentoeleven.join(",");
      const FtentotwelveCSV = ten.Ftentotwelve.join(",");
      const FtentooneCSV = ten.Ftentoone.join(",");
      const FtentotwoCSV = ten.Ftentotwo.join(",");
      const FtentothreeCSV = ten.Ftentothree.join(",");
      const FtentofourCSV = ten.Ftentofour.join(",");
      const FtentofiveCSV = ten.Ftentofive.join(",");

      this.setState({
        Mtentoeleven: MtentoelevenCSV,
        Mtentotwelve: MtentotwelveCSV,
        Mtentoone: MtentooneCSV,
        Mtentotwo: MtentotwoCSV,
        Mtentothree: MtentothreeCSV,
        Mtentofour: MtentofourCSV,
        Mtentofive: MtentofiveCSV,

        Ttentoeleven: TtentoelevenCSV,
        Ttentotwelve: TtentotwelveCSV,
        Ttentoone: TtentooneCSV,
        Ttentotwo: TtentotwoCSV,
        Ttentothree: TtentothreeCSV,
        Ttentofour: TtentofourCSV,
        Ttentofive: TtentofiveCSV,

        Wtentoeleven: WtentoelevenCSV,
        Wtentotwelve: WtentotwelveCSV,
        Wtentoone: WtentooneCSV,
        Wtentotwo: WtentotwoCSV,
        Wtentothree: WtentothreeCSV,
        Wtentofour: WtentofourCSV,
        Wtentofive: WtentofiveCSV,

        THtentoeleven: THtentoelevenCSV,
        THtentotwelve: THtentotwelveCSV,
        THtentoone: THtentooneCSV,
        THtentotwo: THtentotwoCSV,
        THtentothree: THtentothreeCSV,
        THtentofour: THtentofourCSV,
        THtentofive: THtentofiveCSV,

        Ftentoeleven: FtentoelevenCSV,
        Ftentotwelve: FtentotwelveCSV,
        Ftentoone: FtentooneCSV,
        Ftentotwo: FtentotwoCSV,
        Ftentothree: FtentothreeCSV,
        Ftentofour: FtentofourCSV,
        Ftentofive: FtentofiveCSV
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const tenData = {
      Mtentoeleven: this.state.Mtentoeleven,
      Mtentotwelve: this.state.Mtentotwelve,
      Mtentoone: this.state.Mtentoone,
      Mtentotwo: this.state.Mtentotwo,
      Mtentothree: this.state.Mtentothree,
      Mtentofour: this.state.Mtentofour,
      Mtentofive: this.state.Mtentofive,

      Ttentoeleven: this.state.Ttentoeleven,
      Ttentotwelve: this.state.Ttentotwelve,
      Ttentoone: this.state.Ttentoone,
      Ttentotwo: this.state.Ttentotwo,
      Ttentothree: this.state.Ttentothree,
      Ttentofour: this.state.Ttentofour,
      Ttentofive: this.state.Ttentofive,

      Wtentoeleven: this.state.Wtentoeleven,
      Wtentotwelve: this.state.Wtentotwelve,
      Wtentoone: this.state.Wtentoone,
      Wtentotwo: this.state.Wtentotwo,
      Wtentothree: this.state.Wtentothree,
      Wtentofour: this.state.Wtentofour,
      Wtentofive: this.state.Wtentofive,

      THtentoeleven: this.state.THtentoeleven,
      THtentotwelve: this.state.THtentotwelve,
      THtentoone: this.state.THtentoone,
      THtentotwo: this.state.THtentotwo,
      THtentothree: this.state.THtentothree,
      THtentofour: this.state.THtentofour,
      THtentofive: this.state.THtentofive,

      Ftentoeleven: this.state.Ftentoeleven,
      Ftentotwelve: this.state.Ftentotwelve,
      Ftentoone: this.state.Ftentoone,
      Ftentotwo: this.state.Ftentotwo,
      Ftentothree: this.state.Ftentothree,
      Ftentofour: this.state.Ftentofour,
      Ftentofive: this.state.Ftentofive
    };

    this.props.createTen(tenData, this.props.history);
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
                <th scope="row">10.00-11.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentoeleven"
                    value={this.state.Mtentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentoeleven"
                    value={this.state.Ttentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentoeleven"
                    value={this.state.Wtentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentoeleven"
                    value={this.state.THtentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentoeleven"
                    value={this.state.Ftentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-12.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentotwelve"
                    value={this.state.Mtentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentotwelve"
                    value={this.state.Ttentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentotwelve"
                    value={this.state.Wtentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentotwelve"
                    value={this.state.THtentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentotwelve"
                    value={this.state.Ftentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-1.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentoone"
                    value={this.state.Mtentoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentoone"
                    value={this.state.Ttentoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentoone"
                    value={this.state.Wtentoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentoone"
                    value={this.state.THtentoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentoone"
                    value={this.state.Ftentoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-2.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentotwo"
                    value={this.state.Mtentotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentotwo"
                    value={this.state.Ttentotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentotwo"
                    value={this.state.Wtentotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentotwo"
                    value={this.state.THtentotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentotwo"
                    value={this.state.Ftentotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-3.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentothree"
                    value={this.state.Mtentothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentothree"
                    value={this.state.Ttentothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentothree"
                    value={this.state.Wtentothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentothree"
                    value={this.state.THtentothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentothree"
                    value={this.state.Ftentothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-4.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentofour"
                    value={this.state.Mtentofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentofour"
                    value={this.state.Ttentofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentofour"
                    value={this.state.Wtentofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentofour"
                    value={this.state.THtentofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentofour"
                    value={this.state.Ftentofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-5.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentofive"
                    value={this.state.Mtentofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentofive"
                    value={this.state.Ttentofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentofive"
                    value={this.state.Wtentofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentofive"
                    value={this.state.THtentofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentofive"
                    value={this.state.Ftentofive}
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

CreateTen.propTypes = {
  createTen: PropTypes.func.isRequired,
  getCurrentTen: PropTypes.func.isRequired,
  ten: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ten: state.ten
});

export default connect(
  mapStateToProps,
  { createTen, getCurrentTen }
)(withRouter(CreateTen));
