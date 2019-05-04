import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { getCurrentNine, deleteAccount } from "../../actions/nineActions";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      dayofweek: "",
      hallname: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.getCurrentNine();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // componentWillReceiveProps(nextProps) {
  //   let socialInputs;
  //   if (nextProps.nine.nine) {
  //     const nine = nextProps.nine.nine;

  //     // const MninetotenCSV = nine.Mninetoten.join(",");
  //     const MeighttonineCSV = nine.Meighttonine.join(",");
  //     if (this.state.dayofweek == "Monday") {
  //       socialInputs = (
  //         <div>
  //           <ul className="list-group">
  //             {nine.Meighttonine.slice(0, 4).map((skill, index) => (
  //               <li key={index} className="list-group-item">
  //                 {/* <i className="fa fa-check pr-1" /> */}
  //                 {skill === "E001" ? skill : null}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       );
  //     }
  //   }
  // }

  render() {
    let eightInputs;
    let nineInputs;
    let tenInputs;
    let elevenInputs;
    let twelveInputs;
    let oneInputs;
    let twoInputs;
    let threeInputs;
    let fourInputs;
    let fiveInputs;

    const { nine } = this.props.nine;

    // if (this.state.dayofweek == "Monday") {
    //   socialInputs = (
    //     <div>
    //       {nine.Meighttonine.slice(0, 4).map((skill, index) => (
    //         <span key={index} className="list-group-item">
    //           {/* <i className="fa fa-check pr-1" /> */}
    //           {skill === this.state.hallname ? "Avaialable" : null}
    //         </span>
    //       ))}
    //     </div>
    //   );
    // }

    if (this.state.dayofweek == "Monday") {
      let i;

      for (i = 0; i <= nine.Meighttonine.length; i++) {
        if (nine.Meighttonine[i] == this.state.hallname) {
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mninetoten.length; i++) {
        if (nine.Mninetoten[i] == this.state.hallname) {
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mtentoeleven.length; i++) {
        if (nine.Mtentoeleven[i] == this.state.hallname) {
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Meleventotwelve.length; i++) {
        if (nine.Meleventotwelve[i] == this.state.hallname) {
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mtwelvetoone.length; i++) {
        if (nine.Mtwelvetoone[i] == this.state.hallname) {
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Monetotwo.length; i++) {
        if (nine.Monetotwo[i] == this.state.hallname) {
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mtwotothree.length; i++) {
        if (nine.Mtwotothree[i] == this.state.hallname) {
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mthreetofour.length; i++) {
        if (nine.Mthreetofour[i] == this.state.hallname) {
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mfourtofive.length; i++) {
        if (nine.Mfourtofive[i] == this.state.hallname) {
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td>Avaialable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }
    }

    const options = [
      { label: "* Select Day", value: 0 },
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wenesday", value: "Wenesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" }
    ];

    return (
      <div className="Example">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder=""
                  name="hallname"
                  value={this.state.hallname}
                  onChange={this.onChange}
                />
                <SelectListGroup
                  placeholder=""
                  name="dayofweek"
                  value={this.state.dayofweek}
                  onChange={this.onChange}
                  options={options}
                />

                {/* <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div> */}
                {eightInputs}
                {nineInputs}
                {tenInputs}
                {elevenInputs}
                {twelveInputs}
                {oneInputs}
                {twoInputs}
                {threeInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  getCurrentNine: PropTypes.func.isRequired,
  nine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nine: state.nine
});

export default connect(
  mapStateToProps,
  { getCurrentNine }
)(withRouter(Example));
