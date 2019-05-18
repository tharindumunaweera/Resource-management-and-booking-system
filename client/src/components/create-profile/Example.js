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
      hallname: "",

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.getCurrentNine()

    const { handle } = this.props.match.params
    const { name } = this.props.location.state

    this.setState({
      hallname: name
    });
  }

  // componentWillReceiveProps() {
  //   this.setState({
  //     hallname: this.props.name
  //   });
  // }

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

    if (this.state.dayofweek == "Tuesday") {
      let i;

      for (i = 0; i <= nine.Teighttonine.length; i++) {
        if (nine.Teighttonine[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Tninetoten.length; i++) {
        if (nine.Tninetoten[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ttentoeleven.length; i++) {
        if (nine.Ttentoeleven[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Televentotwelve.length; i++) {
        if (nine.Televentotwelve[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ttwelvetoone.length; i++) {
        if (nine.Ttwelvetoone[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Tonetotwo.length; i++) {
        if (nine.Tonetotwo[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ttwotothree.length; i++) {
        if (nine.Ttwotothree[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Tthreetofour.length; i++) {
        if (nine.Tthreetofour[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Tfourtofive.length; i++) {
        if (nine.Tfourtofive[i] == this.state.hallname) {
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

    if (this.state.dayofweek == "Wenesday") {
      let i;

      for (i = 0; i <= nine.Weighttonine.length; i++) {
        if (nine.Weighttonine[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wninetoten.length; i++) {
        if (nine.Wninetoten[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wtentoeleven.length; i++) {
        if (nine.Wtentoeleven[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Weleventotwelve.length; i++) {
        if (nine.Weleventotwelve[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wtwelvetoone.length; i++) {
        if (nine.Wtwelvetoone[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wonetotwo.length; i++) {
        if (nine.Wonetotwo[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wtwotothree.length; i++) {
        if (nine.Wtwotothree[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wthreetofour.length; i++) {
        if (nine.Wthreetofour[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Wfourtofive.length; i++) {
        if (nine.Wfourtofive[i] == this.state.hallname) {
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

    if (this.state.dayofweek == "Thursday") {
      let i;

      for (i = 0; i <= nine.THeighttonine.length; i++) {
        if (nine.THeighttonine[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THninetoten.length; i++) {
        if (nine.THninetoten[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THtentoeleven.length; i++) {
        if (nine.THtentoeleven[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THeleventotwelve.length; i++) {
        if (nine.THeleventotwelve[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THtwelvetoone.length; i++) {
        if (nine.THtwelvetoone[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THonetotwo.length; i++) {
        if (nine.THonetotwo[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THtwotothree.length; i++) {
        if (nine.THtwotothree[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THthreetofour.length; i++) {
        if (nine.THthreetofour[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.THfourtofive.length; i++) {
        if (nine.THfourtofive[i] == this.state.hallname) {
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

    if (this.state.dayofweek == "Friday") {
      let i;

      for (i = 0; i <= nine.Feighttonine.length; i++) {
        if (nine.Feighttonine[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Fninetoten.length; i++) {
        if (nine.Fninetoten[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ftentoeleven.length; i++) {
        if (nine.Ftentoeleven[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Feleventotwelve.length; i++) {
        if (nine.Feleventotwelve[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ftwelvetoone.length; i++) {
        if (nine.Ftwelvetoone[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Fonetotwo.length; i++) {
        if (nine.Fonetotwo[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ftwotothree.length; i++) {
        if (nine.Ftwotothree[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Fthreetofour.length; i++) {
        if (nine.Fthreetofour[i] == this.state.hallname) {
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

      for (i = 0; i <= nine.Ffourtofive.length; i++) {
        if (nine.Ffourtofive[i] == this.state.hallname) {
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
            <div className="col-sm-4 style">
              <form onSubmit={this.onSubmit}>
                {/* <h1>{this.state.lat}</h1> */}
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
              </form>
            </div>
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
            <div className="col-sm-4 style">
              <div className="card card-body bg-light mb-3">
                {eightInputs}
                {nineInputs}
                {tenInputs}
                {elevenInputs}
                {twelveInputs}
                {oneInputs}
                {twoInputs}
                {threeInputs}
                {fourInputs}
              </div>
            </div>
            {/* <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                /> */}
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
