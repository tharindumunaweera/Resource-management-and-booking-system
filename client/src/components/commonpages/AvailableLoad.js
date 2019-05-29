

import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { withRouter } from "react-router-dom";
import { getCurrentNine, deleteAccount } from "../../actions/nineActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from 'axios'
import { saveAs } from 'file-saver'

import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import Calender from "../Calender/Calender";
import { weekdays } from "moment";

import moment from 'moment';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import format from 'date-fns/format';
import { getBookings } from "../../actions/bookingActions";
import Spinner from "../common/Spinner";

//import Sahan from '../../Calander/sahan'


const style = {
  //this for Calender
  position: "relative",
  margin: "20px auto"
};

class AvailableLoad extends Component {



  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      dayofweek: "",
      hallname: "",
      lat: "",
      bookdate: "",
      tha: ""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
  }





  componentDidMount() {
    this.props.getCurrentNine()////////////////////////////////////////////////////////////////
    this.props.getBookings();

    const { handle } = this.props.match.params

    // const { handle } = this.props.match.params

    const { name, cal } = this.props.location.state

    this.setState({
      hallname: name,
      // dayofweek: moment().format(' dddd ')
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

    let eightnine;
    let eightten;
    let eighteleven;
    let eighttwelve;
    let eightone;
    let eighttwo;
    let eightthree;
    let eightfour;

    let nineten;
    let nineeleven;
    let ninetwelve;
    let nineone;
    let ninetwo;
    let ninethree;
    let ninefour;

    let teneleven;
    let tentwelve;
    let tenone;
    let tentwo;
    let tenthree;
    let tenfour;

    let eleventwelve;
    let elevenone;
    let eleventwo;
    let eleventhree;
    let elevenfour;

    let twelveone;
    let twelvetwo;
    let twelvethree;
    let twelvefour;

    let onetwo;
    let onethree;
    let onefour;

    let twothree;
    let twofour;

    let threefour;
    let fourfive;

    let eight = false;
    let nines = false;
    let ten = false;
    let eleven = false;
    let twelve = false;
    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;



    const { nine } = this.props.nine;
    const { bookings, loading } = this.props.booking;

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
          if (bookings === null || loading) {
            eightInputs = <Spinner />;
          } else {
            let em = 0;
            if (bookings.length > 0) {
              eightInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) || (this.state.bookdate === booking.bookdate) && (this.state.dayofweek === booking.dayofweek) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">08.00 a.m-09.00 a.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "08.00 a.m-09.00 a.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              eight = true;
              eightInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-09.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-09.00 a.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }



        }
      }


      for (i = 0; i <= nine.Mninetoten.length; i++) {
        if (nine.Mninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }


      for (i = 0; i <= nine.Mtentoeleven.length; i++) {
        if (nine.Mtentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>



                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }




      for (i = 0; i <= nine.Meleventotwelve.length; i++) {
        if (nine.Meleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }



      for (i = 0; i <= nine.Mtwelvetoone.length; i++) {
        if (nine.Mtwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }



      for (i = 0; i <= nine.Monetotwo.length; i++) {
        if (nine.Monetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mtwotothree.length; i++) {
        if (nine.Mtwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mthreetofour.length; i++) {
        if (nine.Mthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Mfourtofive.length; i++) {
        if (nine.Mfourtofive[i] == this.state.hallname) {
          four = true
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


    }

    if (this.state.dayofweek == "Tuesday") {
      let i;

      for (i = 0; i <= nine.Teighttonine.length; i++) {
        if (nine.Teighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tninetoten.length; i++) {
        if (nine.Tninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ttentoeleven.length; i++) {
        if (nine.Ttentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Televentotwelve.length; i++) {
        if (nine.Televentotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ttwelvetoone.length; i++) {
        if (nine.Ttwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tonetotwo.length; i++) {
        if (nine.Tonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ttwotothree.length; i++) {
        if (nine.Ttwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tthreetofour.length; i++) {
        if (nine.Tthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tfourtofive.length; i++) {
        if (nine.Tfourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

    }

    if (this.state.dayofweek == "Wenesday") {
      let i;

      for (i = 0; i <= nine.Weighttonine.length; i++) {
        if (nine.Weighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wninetoten.length; i++) {
        if (nine.Wninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wtentoeleven.length; i++) {
        if (nine.Wtentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "010.00 a.m-11.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Weleventotwelve.length; i++) {
        if (nine.Weleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wtwelvetoone.length; i++) {
        if (nine.Wtwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wonetotwo.length; i++) {
        if (nine.Wonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wtwotothree.length; i++) {
        if (nine.Wtwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wthreetofour.length; i++) {
        if (nine.Wthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wfourtofive.length; i++) {
        if (nine.Wfourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


    }

    if (this.state.dayofweek == "Thursday") {
      let i;

      for (i = 0; i <= nine.THeighttonine.length; i++) {
        if (nine.THeighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THninetoten.length; i++) {
        if (nine.THninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THtentoeleven.length; i++) {
        if (nine.THtentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THeleventotwelve.length; i++) {
        if (nine.THeleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THtwelvetoone.length; i++) {
        if (nine.THtwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THonetotwo.length; i++) {
        if (nine.THonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THtwotothree.length; i++) {
        if (nine.THtwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THthreetofour.length; i++) {
        if (nine.THthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THfourtofive.length; i++) {
        if (nine.THfourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

    }

    if (this.state.dayofweek == "Friday") {
      let i;

      for (i = 0; i <= nine.Feighttonine.length; i++) {
        if (nine.Feighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Fninetoten.length; i++) {
        if (nine.Fninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ftentoeleven.length; i++) {
        if (nine.Ftentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Feleventotwelve.length; i++) {
        if (nine.Feleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ftwelvetoone.length; i++) {
        if (nine.Ftwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Fonetotwo.length; i++) {
        if (nine.Fonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ftwotothree.length; i++) {
        if (nine.Ftwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Fthreetofour.length; i++) {
        if (nine.Fthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ffourtofive.length; i++) {
        if (nine.Ffourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        <button type="submit" className="btn btn-primary">
                          <strong> Available</strong>
                        </button>
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      <button type="submit" className="btn btn-primary">
                        <strong> Available</strong>
                      </button>
                    </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
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
      <React.Fragment>

        <MDBRow>
          <div className="col-sm-3" />
          <MDBCol md="4">
            <MDBCard className="mt-5">
              <MDBCardBody style={{ width: '100%', height: '700px' }} className="text-center">
                <InfiniteCalendar
                  onSelect={date =>
                    this.setState({
                      bookdate: format(date, 'YYYY/MM/DD'),
                      dayofweek: format(date, 'dddd')
                    })
                  }

                />
                {/* <MDBCard className="mt-3">
              
              <MDBCardBody style={{width: '100%', height: '210px'}} className="text-center">
              <form onSubmit={this.onSubmit}>
             
                <li className="list-group-item">
                <TextFieldGroup
                    placeholder="Hall Name"
                    name="hallname"
                    value={this.state.hallname}
                    onChange={this.onChange}
                  />
                </li>
                <li className="list-group-item">
                <TextFieldGroup
                    placeholder="Hall Name"
                    name="dayofweek"
                    value={this.state.dayofweek}
                    onChange={this.onChange}
                  />
                </li>
            </form>



              
              </MDBCardBody>
            </MDBCard> */}
              </MDBCardBody>



            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black">

                <h4 className="h4-responsive text-white">
                  <strong> {this.state.hallname} </strong>
                </h4>
              </MDBView>
              <MDBCardBody style={{ width: '100%', height: '700px' }} className="text-center">


                {eightInputs}
                {eightnine}
                {eightten}
                {eighteleven}
                {eighttwelve}
                {eightone}
                {eighttwo}
                {eightthree}
                {eightfour}

                {nineInputs}
                {nineten}
                {nineeleven}
                {ninetwelve}
                {nineone}
                {ninetwo}
                {ninethree}
                {ninefour}

                {tenInputs}
                {teneleven}
                {tentwelve}
                {tenone}
                {tentwo}
                {tenthree}
                {tenfour}

                {elevenInputs}
                {eleventwelve}
                {elevenone}
                {eleventwo}
                {eleventhree}
                {elevenfour}

                {twelveInputs}
                {twelveone}
                {twelvetwo}
                {twelvethree}
                {twelvefour}

                {oneInputs}
                {onetwo}
                {onethree}
                {onefour}

                {twoInputs}
                {twothree}
                {twofour}

                {threeInputs}
                {threefour}
                {fourInputs}



              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>

          <div className="col-sm-3" />
          <MDBCol md="4">


            {/* <Calender style= {style} width="320px" onDayClick={(e, day)=> this.onDayClick(e,day)}  /> */}
            {/* <input type="text" value={this.state.name}></input>
            <input type="text" value={this.state.tha}></input> */}






          </MDBCol>

          <MDBCol md="5">

          </MDBCol>
        </MDBRow>


      </React.Fragment>
    );
  }
}

AvailableLoad.propTypes = {
  getCurrentNine: PropTypes.func.isRequired,
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  nine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nine: state.nine,
  booking: state.booking
});

export default connect(
  mapStateToProps,
  { getCurrentNine, getBookings }
)(withRouter(AvailableLoad));


