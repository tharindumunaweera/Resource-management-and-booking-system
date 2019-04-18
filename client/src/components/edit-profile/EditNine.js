import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { createNine, getCurrentNine } from "../../actions/nineActions";

class CreateNine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mninetoten: "",
      Mninetoeleven: "",
      Mninetotwelve: "",
      Mninetoone: "",
      Mninetotwo: "",
      Mninetothree: "",
      Mninetofour: "",
      Mninetofive: "",

      Tninetoten: "",
      Tninetoeleven: "",
      Tninetotwelve: "",
      Tninetoone: "",
      Tninetotwo: "",
      Tninetothree: "",
      Tninetofour: "",
      Tninetofive: "",

      Wninetoten: "",
      Wninetoeleven: "",
      Wninetotwelve: "",
      Wninetoone: "",
      Wninetotwo: "",
      Wninetothree: "",
      Wninetofour: "",
      Wninetofive: "",

      THninetoten: "",
      THninetoeleven: "",
      THninetotwelve: "",
      THninetoone: "",
      THninetotwo: "",
      THninetothree: "",
      THninetofour: "",
      THninetofive: "",

      Fninetoten: "",
      Fninetoeleven: "",
      Fninetotwelve: "",
      Fninetoone: "",
      Fninetotwo: "",
      Fninetothree: "",
      Fninetofour: "",
      Fninetofive: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentNine();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nine.nine) {
      const nine = nextProps.nine.nine;

      const MninetotenCSV = nine.Mninetoten.join(",");
      const MninetoelevenCSV = nine.Mninetoeleven.join(",");
      const MninetotwelveCSV = nine.Mninetotwelve.join(",");
      const MninetooneCSV = nine.Mninetoone.join(",");
      const MninetotwoCSV = nine.Mninetotwo.join(",");
      const MninetothreeCSV = nine.Mninetothree.join(",");
      const MninetofourCSV = nine.Mninetofour.join(",");
      const MninetofiveCSV = nine.Mninetofive.join(",");
      const TninetotenCSV = nine.Tninetoten.join(",");
      const TninetoelevenCSV = nine.Tninetoeleven.join(",");
      const TninetotwelveCSV = nine.Tninetotwelve.join(",");
      const TninetooneCSV = nine.Tninetoone.join(",");
      const TninetotwoCSV = nine.Tninetotwo.join(",");
      const TninetothreeCSV = nine.Tninetothree.join(",");
      const TninetofourCSV = nine.Tninetofour.join(",");
      const TninetofiveCSV = nine.Tninetofive.join(",");
      const WninetotenCSV = nine.Wninetoten.join(",");
      const WninetoelevenCSV = nine.Wninetoeleven.join(",");
      const WninetotwelveCSV = nine.Wninetotwelve.join(",");
      const WninetooneCSV = nine.Wninetoone.join(",");
      const WninetotwoCSV = nine.Wninetotwo.join(",");
      const WninetothreeCSV = nine.Wninetothree.join(",");
      const WninetofourCSV = nine.Wninetofour.join(",");
      const WninetofiveCSV = nine.Wninetofive.join(",");
      const THninetotenCSV = nine.THninetoten.join(",");
      const THninetoelevenCSV = nine.THninetoeleven.join(",");
      const THninetotwelveCSV = nine.THninetotwelve.join(",");
      const THninetooneCSV = nine.THninetoone.join(",");
      const THninetotwoCSV = nine.THninetotwo.join(",");
      const THninetothreeCSV = nine.THninetothree.join(",");
      const THninetofourCSV = nine.THninetofour.join(",");
      const THninetofiveCSV = nine.THninetofive.join(",");
      const FninetotenCSV = nine.Fninetoten.join(",");
      const FninetoelevenCSV = nine.Fninetoeleven.join(",");
      const FninetotwelveCSV = nine.Fninetotwelve.join(",");
      const FninetooneCSV = nine.Fninetoone.join(",");
      const FninetotwoCSV = nine.Fninetotwo.join(",");
      const FninetothreeCSV = nine.Fninetothree.join(",");
      const FninetofourCSV = nine.Fninetofour.join(",");
      const FninetofiveCSV = nine.Fninetofive.join(",");

      this.setState({
        Mninetoten: MninetotenCSV,
        Mninetoeleven: MninetoelevenCSV,
        Mninetotwelve: MninetotwelveCSV,
        Mninetoone: MninetooneCSV,
        Mninetotwo: MninetotwoCSV,
        Mninetothree: MninetothreeCSV,
        Mninetofour: MninetofourCSV,
        Mninetofive: MninetofiveCSV,
        Tninetoten: TninetotenCSV,
        Tninetoeleven: TninetoelevenCSV,
        Tninetotwelve: TninetotwelveCSV,
        Tninetoone: TninetooneCSV,
        Tninetotwo: TninetotwoCSV,
        Tninetothree: TninetothreeCSV,
        Tninetofour: TninetofourCSV,
        Tninetofive: TninetofiveCSV,
        Wninetoten: WninetotenCSV,
        Wninetoeleven: WninetoelevenCSV,
        Wninetotwelve: WninetotwelveCSV,
        Wninetoone: WninetooneCSV,
        Wninetotwo: WninetotwoCSV,
        Wninetothree: WninetothreeCSV,
        Wninetofour: WninetofourCSV,
        Wninetofive: WninetofiveCSV,
        THninetoten: THninetotenCSV,
        THninetoeleven: THninetoelevenCSV,
        THninetotwelve: THninetotwelveCSV,
        THninetoone: THninetooneCSV,
        THninetotwo: THninetotwoCSV,
        THninetothree: THninetothreeCSV,
        THninetofour: THninetofourCSV,
        THninetofive: THninetofiveCSV,
        Fninetoten: FninetotenCSV,
        Fninetoeleven: FninetoelevenCSV,
        Fninetotwelve: FninetotwelveCSV,
        Fninetoone: FninetooneCSV,
        Fninetotwo: FninetotwoCSV,
        Fninetothree: FninetothreeCSV,
        Fninetofour: FninetofourCSV,
        Fninetofive: FninetofiveCSV
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const nineData = {
      Mninetoten: this.state.Mninetoten,
      Mninetoeleven: this.state.Mninetoeleven,
      Mninetotwelve: this.state.Mninetotwelve,
      Mninetoone: this.state.Mninetoone,
      Mninetotwo: this.state.Mninetotwo,
      Mninetothree: this.state.Mninetothree,
      Mninetofour: this.state.Mninetofour,
      Mninetofive: this.state.Mninetofive,

      Tninetoten: this.state.Tninetoten,
      Tninetoeleven: this.state.Tninetoeleven,
      Tninetotwelve: this.state.Tninetotwelve,
      Tninetoone: this.state.Tninetoone,
      Tninetotwo: this.state.Tninetotwo,
      Tninetothree: this.state.Tninetothree,
      Tninetofour: this.state.Tninetofour,
      Tninetofive: this.state.Tninetofive,

      Wninetoten: this.state.Wninetoten,
      Wninetoeleven: this.state.Wninetoeleven,
      Wninetotwelve: this.state.Wninetotwelve,
      Wninetoone: this.state.Wninetoone,
      Wninetotwo: this.state.Wninetotwo,
      Wninetothree: this.state.Wninetothree,
      Wninetofour: this.state.Wninetofour,
      Wninetofive: this.state.Wninetofive,

      THninetoten: this.state.THninetoten,
      THninetoeleven: this.state.THninetoeleven,
      THninetotwelve: this.state.THninetotwelve,
      THninetoone: this.state.THninetoone,
      THninetotwo: this.state.THninetotwo,
      THninetothree: this.state.THninetothree,
      THninetofour: this.state.THninetofour,
      THninetofive: this.state.THninetofive,

      Fninetoten: this.state.Fninetoten,
      Fninetoeleven: this.state.Fninetoeleven,
      Fninetotwelve: this.state.Fninetotwelve,
      Fninetoone: this.state.Fninetoone,
      Fninetotwo: this.state.Fninetotwo,
      Fninetothree: this.state.Fninetothree,
      Fninetofour: this.state.Fninetofour,
      Fninetofive: this.state.Fninetofive
    };

    this.props.createNine(nineData, this.props.history);
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
                <th scope="row">9.00-10.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetoten"
                    value={this.state.Mninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetoten"
                    value={this.state.Tninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetoten"
                    value={this.state.Wninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetoten"
                    value={this.state.THninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetoten"
                    value={this.state.Fninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-11.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetoeleven"
                    value={this.state.Mninetoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetoeleven"
                    value={this.state.Tninetoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetoeleven"
                    value={this.state.Wninetoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetoeleven"
                    value={this.state.THninetoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetoeleven"
                    value={this.state.Fninetoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-12.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetotwelve"
                    value={this.state.Mninetotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetotwelve"
                    value={this.state.Tninetotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetotwelve"
                    value={this.state.Wninetotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetotwelve"
                    value={this.state.THninetotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetotwelve"
                    value={this.state.Fninetotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-1.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetoone"
                    value={this.state.Mninetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetoone"
                    value={this.state.Tninetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetoone"
                    value={this.state.Wninetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetoone"
                    value={this.state.THninetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetoone"
                    value={this.state.Fninetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-2.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetotwo"
                    value={this.state.Mninetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetotwo"
                    value={this.state.Tninetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetotwo"
                    value={this.state.Wninetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetotwo"
                    value={this.state.THninetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetotwo"
                    value={this.state.Fninetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-3 .00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetothree"
                    value={this.state.Mninetothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetothree"
                    value={this.state.Tninetothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetothree"
                    value={this.state.Wninetothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetothree"
                    value={this.state.THninetothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetothree"
                    value={this.state.Fninetothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-4.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetofour"
                    value={this.state.Mninetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetofour"
                    value={this.state.Tninetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetofour"
                    value={this.state.Wninetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetofour"
                    value={this.state.THninetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetofour"
                    value={this.state.Fninetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">9.00-5.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetofive"
                    value={this.state.Mninetofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetofive"
                    value={this.state.Tninetofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetofive"
                    value={this.state.Wninetofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetofive"
                    value={this.state.THninetofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetofive"
                    value={this.state.Fninetofive}
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

CreateNine.propTypes = {
  createNine: PropTypes.func.isRequired,
  getCurrentNine: PropTypes.func.isRequired,
  nine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nine: state.nine
});

export default connect(
  mapStateToProps,
  { createNine, getCurrentNine }
)(withRouter(CreateNine));
