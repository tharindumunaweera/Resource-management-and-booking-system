import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";

import SelectListGroup from "../common/SelectListGroup";
//import { createTimetable } from "../../actions/timetableActions";

class CreateTimetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Meighttonine: "",
      Meighttoten: "",
      Meighttoeleven: "",
      Meighttotwelve: "",
      Meighttoone: "",
      Meighttotwo: "",
      Meighttothree: "",
      Meighttofour: "",
      Meighttofive: "",
      Mninetoten: "",
      Mninetoeleven: "",
      Mninetotwelve: "",
      Mninetoone: "",
      Mninetotwo: "",
      Mninetothree: "",
      Mninetofour: "",
      Mninetofive: "",
      Mtentoeleven: "",
      Mtentotwelve: "",
      Mtentoone: "",
      Mtentotwo: "",
      Mtentothree: "",
      Mtentofour: "",
      Mtentofive: "",
      Meleventotwelve: "",
      Meleventoone: "",
      Meleventotwo: "",
      Meleventothree: "",
      Meleventofour: "",
      Meleventofive: "",
      Mtwelvetoone: "",
      Mtwelvetotwo: "",
      Mtwelvetothree: "",
      Mtwelvetofour: "",
      Mtwelvetofive: "",
      Monetotwo: "",
      Monetothree: "",
      Monetofour: "",
      Monetofive: "",
      Mtwotothree: "",
      Mtwotofour: "",
      Mtwotofive: "",
      Mthreetofour: "",
      Mthreetofive: "",
      Mfourtofive: "",

      Teighttonine: "",
      Teighttoten: "",
      Teighttoeleven: "",
      Teighttotwelve: "",
      Teighttoone: "",
      Teighttotwo: "",
      Teighttothree: "",
      Teighttofour: "",
      Teighttofive: "",
      Tninetoten: "",
      Tninetoeleven: "",
      Tninetotwelve: "",
      Tninetoone: "",
      Tninetotwo: "",
      Tninetothree: "",
      Tninetofour: "",
      Tninetofive: "",
      Ttentoeleven: "",
      Ttentotwelve: "",
      Ttentoone: "",
      Ttentotwo: "",
      Ttentothree: "",
      Ttentofour: "",
      Ttentofive: "",
      Televentotwelve: "",
      Televentoone: "",
      Televentotwo: "",
      Televentothree: "",
      Televentofour: "",
      Televentofive: "",
      Ttwelvetoone: "",
      Ttwelvetotwo: "",
      Ttwelvetothree: "",
      Ttwelvetofour: "",
      Ttwelvetofive: "",
      Tonetotwo: "",
      Tonetothree: "",
      Tonetofour: "",
      Tonetofive: "",
      Ttwotothree: "",
      Ttwotofour: "",
      Ttwotofive: "",
      Tthreetofour: "",
      Tthreetofive: "",
      Tfourtofive: "",

      Weighttonine: "",
      Weighttoten: "",
      Weighttoeleven: "",
      Weighttotwelve: "",
      Weighttoone: "",
      Weighttotwo: "",
      Weighttothree: "",
      Weighttofour: "",
      Weighttofive: "",
      Wninetoten: "",
      Wninetoeleven: "",
      Wninetotwelve: "",
      Wninetoone: "",
      Wninetotwo: "",
      Wninetothree: "",
      Wninetofour: "",
      Wninetofive: "",
      Wtentoeleven: "",
      Wtentotwelve: "",
      Wtentoone: "",
      Wtentotwo: "",
      Wtentothree: "",
      Wtentofour: "",
      Wtentofive: "",
      Weleventotwelve: "",
      Weleventoone: "",
      Weleventotwo: "",
      Weleventothree: "",
      Weleventofour: "",
      Weleventofive: "",
      Wtwelvetoone: "",
      Wtwelvetotwo: "",
      Wtwelvetothree: "",
      Wtwelvetofour: "",
      Wtwelvetofive: "",
      Wonetotwo: "",
      Wonetothree: "",
      Wonetofour: "",
      Wonetofive: "",
      Wtwotothree: "",
      Wtwotofour: "",
      Wtwotofive: "",
      Wthreetofour: "",
      Wthreetofive: "",
      Wfourtofive: "",

      THeighttonine: "",
      THeighttoten: "",
      THeighttoeleven: "",
      THeighttotwelve: "",
      THeighttoone: "",
      THeighttotwo: "",
      THeighttothree: "",
      THeighttofour: "",
      THeighttofive: "",
      THninetoten: "",
      THninetoeleven: "",
      THninetotwelve: "",
      THninetoone: "",
      THninetotwo: "",
      THninetothree: "",
      THninetofour: "",
      THninetofive: "",
      THtentoeleven: "",
      THtentotwelve: "",
      THtentoone: "",
      THtentotwo: "",
      THtentothree: "",
      THtentofour: "",
      THtentofive: "",
      THeleventotwelve: "",
      THeleventoone: "",
      THeleventotwo: "",
      THeleventothree: "",
      THeleventofour: "",
      THeleventofive: "",
      THtwelvetoone: "",
      THtwelvetotwo: "",
      THtwelvetothree: "",
      THtwelvetofour: "",
      THtwelvetofive: "",
      THonetotwo: "",
      THonetothree: "",
      THonetofour: "",
      THonetofive: "",
      THtwotothree: "",
      THtwotofour: "",
      THtwotofive: "",
      THthreetofour: "",
      THthreetofive: "",
      THfourtofive: "",

      Feighttonine: "",
      Feighttoten: "",
      Feighttoeleven: "",
      Feighttotwelve: "",
      Feighttoone: "",
      Feighttotwo: "",
      Feighttothree: "",
      Feighttofour: "",
      Feighttofive: "",
      Fninetoten: "",
      Fninetoeleven: "",
      Fninetotwelve: "",
      Fninetoone: "",
      Fninetotwo: "",
      Fninetothree: "",
      Fninetofour: "",
      Fninetofive: "",
      Ftentoeleven: "",
      Ftentotwelve: "",
      Ftentoone: "",
      Ftentotwo: "",
      Ftentothree: "",
      Ftentofour: "",
      Ftentofive: "",
      Feleventotwelve: "",
      Feleventoone: "",
      Feleventotwo: "",
      Feleventothree: "",
      Feleventofour: "",
      Feleventofive: "",
      Ftwelvetoone: "",
      Ftwelvetotwo: "",
      Ftwelvetothree: "",
      Ftwelvetofour: "",
      Ftwelvetofive: "",
      Fonetotwo: "",
      Fonetothree: "",
      Fonetofour: "",
      Fonetofive: "",
      Ftwotothree: "",
      Ftwotofour: "",
      Ftwotofive: "",
      Fthreetofour: "",
      Fthreetofive: "",
      Ffourtofive: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      Meighttonine: this.state.Meighttonine,
      Meighttoten: this.state.Meighttoten,
      Meighttoeleven: this.state.Meighttoeleven,
      Meighttotwelve: this.state.Meighttotwelve,
      Meighttoone: this.state.Meighttoone,
      Meighttotwo: this.state.Meighttotwo,
      Meighttothree: this.state.Meighttothree,
      Meighttofour: this.state.Meighttofour,
      Meighttofive: this.state.Meighttofive,
      Mninetoten: this.state.Mninetoten,
      Mninetoeleven: this.state.Mninetoeleven,
      Mninetotwelve: this.state.Mninetotwelve,
      Mninetoone: this.state.Mninetoone,
      Mninetotwo: this.state.Mninetotwo,
      Mninetothree: this.state.Mninetothree,
      Mninetofour: this.state.Mninetofour,
      Mninetofive: this.state.Mninetofive,
      Mtentoeleven: this.state.Mtentoeleven,
      Mtentotwelve: this.state.Mtentotwelve,
      Mtentoone: this.state.Mtentoone,
      Mtentotwo: this.state.Mtentotwo,
      Mtentothree: this.state.Mtentothree,
      Mtentofour: this.state.Mtentofour,
      Mtentofive: this.state.Mtentofive,
      Meleventotwelve: this.state.Meleventotwelve,
      Meleventoone: this.state.Meleventoone,
      Meleventotwo: this.state.Meleventotwo,
      Meleventothree: this.state.Meleventothree,
      Meleventofour: this.state.Meleventofour,
      Meleventofive: this.state.Meleventofive,
      Mtwelvetoone: this.state.Mtwelvetoone,
      Mtwelvetotwo: this.state.Mtwelvetotwo,
      Mtwelvetothree: this.state.Mtwelvetothree,
      Mtwelvetofour: this.state.Mtwelvetofour,
      Mtwelvetofive: this.state.Mtwelvetofive,
      Monetotwo: this.state.Monetotwo,
      Monetothree: this.state.Monetothree,
      Monetofour: this.state.Monetofour,
      Monetofive: this.state.Monetofive,
      Monetothree: this.state.Monetothree,
      Monetofour: this.state.Monetofour,
      Monetofive: this.state.Monetofive,
      Mtwotothree: this.state.Mtwotothree,
      Mtwotofour: this.state.Mtwotofour,
      Mtwotofive: this.state.Mtwotofive,
      Mthreetofour: this.state.Mthreetofour,
      Mthreetofive: this.state.Mthreetofive,
      Mfourtofive: this.state.Mfourtofive,

      Teighttonine: this.state.Teighttonine,
      Teighttoten: this.state.Teighttoten,
      Teighttoeleven: this.state.Teighttoeleven,
      Teighttotwelve: this.state.Teighttotwelve,
      Teighttoone: this.state.Teighttoone,
      Teighttotwo: this.state.Teighttotwo,
      Teighttothree: this.state.Teighttothree,
      Teighttofour: this.state.Teighttofour,
      Teighttofive: this.state.Teighttofive,
      Tninetoten: this.state.Tninetoten,
      Tninetoeleven: this.state.Tninetoeleven,
      Tninetotwelve: this.state.Tninetotwelve,
      Tninetoone: this.state.Tninetoone,
      Tninetotwo: this.state.Tninetotwo,
      Tninetothree: this.state.Tninetothree,
      Tninetofour: this.state.Tninetofour,
      Tninetofive: this.state.Tninetofive,
      Ttentoeleven: this.state.Ttentoeleven,
      Ttentotwelve: this.state.Ttentotwelve,
      Ttentoone: this.state.Ttentoone,
      Ttentotwo: this.state.Ttentotwo,
      Ttentothree: this.state.Ttentothree,
      Ttentofour: this.state.Ttentofour,
      Ttentofive: this.state.Ttentofive,
      Televentotwelve: this.state.Televentotwelve,
      Televentoone: this.state.Televentoone,
      Televentotwo: this.state.Televentotwo,
      Televentothree: this.state.Televentothree,
      Televentofour: this.state.Televentofour,
      Televentofive: this.state.Televentofive,
      Ttwelvetoone: this.state.Ttwelvetoone,
      Ttwelvetotwo: this.state.Ttwelvetotwo,
      Ttwelvetothree: this.state.Ttwelvetothree,
      Ttwelvetofour: this.state.Ttwelvetofour,
      Ttwelvetofive: this.state.Ttwelvetofive,
      Tonetotwo: this.state.Tonetotwo,
      Tonetothree: this.state.Tonetothree,
      Tonetofour: this.state.Tonetofour,
      Tonetofive: this.state.Tonetofive,
      Tonetothree: this.state.Tonetothree,
      Tonetofour: this.state.Tonetofour,
      Tonetofive: this.state.Tonetofive,
      Ttwotothree: this.state.Ttwotothree,
      Ttwotofour: this.state.Ttwotofour,
      Ttwotofive: this.state.Ttwotofive,
      Tthreetofour: this.state.Tthreetofour,
      Tthreetofive: this.state.Tthreetofive,
      Tfourtofive: this.state.Tfourtofive,

      Weighttonine: this.state.Weighttonine,
      Weighttoten: this.state.Weighttoten,
      Weighttoeleven: this.state.Weighttoeleven,
      Weighttotwelve: this.state.Weighttotwelve,
      Weighttoone: this.state.Weighttoone,
      Weighttotwo: this.state.Weighttotwo,
      Weighttothree: this.state.Weighttothree,
      Weighttofour: this.state.Weighttofour,
      Weighttofive: this.state.Weighttofive,
      Wninetoten: this.state.Wninetoten,
      Wninetoeleven: this.state.Wninetoeleven,
      Wninetotwelve: this.state.Wninetotwelve,
      Wninetoone: this.state.Wninetoone,
      Wninetotwo: this.state.Wninetotwo,
      Wninetothree: this.state.Wninetothree,
      Wninetofour: this.state.Wninetofour,
      Wninetofive: this.state.Wninetofive,
      Wtentoeleven: this.state.Wtentoeleven,
      Wtentotwelve: this.state.Wtentotwelve,
      Wtentoone: this.state.Wtentoone,
      Wtentotwo: this.state.Wtentotwo,
      Wtentothree: this.state.Wtentothree,
      Wtentofour: this.state.Wtentofour,
      Wtentofive: this.state.Wtentofive,
      Weleventotwelve: this.state.Weleventotwelve,
      Weleventoone: this.state.Weleventoone,
      Weleventotwo: this.state.Weleventotwo,
      Weleventothree: this.state.Weleventothree,
      Weleventofour: this.state.Weleventofour,
      Weleventofive: this.state.Weleventofive,
      Wtwelvetoone: this.state.Wtwelvetoone,
      Wtwelvetotwo: this.state.Wtwelvetotwo,
      Wtwelvetothree: this.state.Wtwelvetothree,
      Wtwelvetofour: this.state.Wtwelvetofour,
      Wtwelvetofive: this.state.Wtwelvetofive,
      Wonetotwo: this.state.Wonetotwo,
      Wonetothree: this.state.Wonetothree,
      Wonetofour: this.state.Wonetofour,
      Wonetofive: this.state.Wonetofive,
      Wonetothree: this.state.Wonetothree,
      Wonetofour: this.state.Wonetofour,
      Wonetofive: this.state.Wonetofive,
      Wtwotothree: this.state.Wtwotothree,
      Wtwotofour: this.state.Wtwotofour,
      Wtwotofive: this.state.Wtwotofive,
      Wthreetofour: this.state.Wthreetofour,
      Wthreetofive: this.state.Wthreetofive,
      Wfourtofive: this.state.Wfourtofive,

      THeighttonine: this.state.THeighttonine,
      THeighttoten: this.state.THeighttoten,
      THeighttoeleven: this.state.THeighttoeleven,
      THeighttotwelve: this.state.THeighttotwelve,
      THeighttoone: this.state.THeighttoone,
      THeighttotwo: this.state.THeighttotwo,
      THeighttothree: this.state.THeighttothree,
      THeighttofour: this.state.THeighttofour,
      THeighttofive: this.state.THeighttofive,
      THninetoten: this.state.THninetoten,
      THninetoeleven: this.state.THninetoeleven,
      THninetotwelve: this.state.THninetotwelve,
      THninetoone: this.state.THninetoone,
      THninetotwo: this.state.THninetotwo,
      THninetothree: this.state.THninetothree,
      THninetofour: this.state.THninetofour,
      THninetofive: this.state.THninetofive,
      THtentoeleven: this.state.THtentoeleven,
      THtentotwelve: this.state.THtentotwelve,
      THtentoone: this.state.THtentoone,
      THtentotwo: this.state.THtentotwo,
      THtentothree: this.state.THtentothree,
      THtentofour: this.state.THtentofour,
      THtentofive: this.state.THtentofive,
      THeleventotwelve: this.state.THeleventotwelve,
      THeleventoone: this.state.THeleventoone,
      THeleventotwo: this.state.THeleventotwo,
      THeleventothree: this.state.THeleventothree,
      THeleventofour: this.state.THeleventofour,
      THeleventofive: this.state.THeleventofive,
      THtwelvetoone: this.state.THtwelvetoone,
      THtwelvetotwo: this.state.THtwelvetotwo,
      THtwelvetothree: this.state.THtwelvetothree,
      THtwelvetofour: this.state.THtwelvetofour,
      THtwelvetofive: this.state.THtwelvetofive,
      THonetotwo: this.state.THonetotwo,
      THonetothree: this.state.THonetothree,
      THonetofour: this.state.THonetofour,
      THonetofive: this.state.THonetofive,
      THonetothree: this.state.THonetothree,
      THonetofour: this.state.THonetofour,
      THonetofive: this.state.THonetofive,
      THtwotothree: this.state.THtwotothree,
      THtwotofour: this.state.THtwotofour,
      THtwotofive: this.state.THtwotofive,
      THthreetofour: this.state.THthreetofour,
      THthreetofive: this.state.THthreetofive,
      THfourtofive: this.state.THfourtofive,

      Feighttonine: this.state.Feighttonine,
      Feighttoten: this.state.Feighttoten,
      Feighttoeleven: this.state.Feighttoeleven,
      Feighttotwelve: this.state.Feighttotwelve,
      Feighttoone: this.state.Feighttoone,
      Feighttotwo: this.state.Feighttotwo,
      Feighttothree: this.state.Feighttothree,
      Feighttofour: this.state.Feighttofour,
      Feighttofive: this.state.Feighttofive,
      Fninetoten: this.state.Fninetoten,
      Fninetoeleven: this.state.Fninetoeleven,
      Fninetotwelve: this.state.Fninetotwelve,
      Fninetoone: this.state.Fninetoone,
      Fninetotwo: this.state.Fninetotwo,
      Fninetothree: this.state.Fninetothree,
      Fninetofour: this.state.Fninetofour,
      Fninetofive: this.state.Fninetofive,
      Ftentoeleven: this.state.Ftentoeleven,
      Ftentotwelve: this.state.Ftentotwelve,
      Ftentoone: this.state.Ftentoone,
      Ftentotwo: this.state.Ftentotwo,
      Ftentothree: this.state.Ftentothree,
      Ftentofour: this.state.Ftentofour,
      Ftentofive: this.state.Ftentofive,
      Feleventotwelve: this.state.Feleventotwelve,
      Feleventoone: this.state.Feleventoone,
      Feleventotwo: this.state.Feleventotwo,
      Feleventothree: this.state.Feleventothree,
      Feleventofour: this.state.Feleventofour,
      Feleventofive: this.state.Feleventofive,
      Ftwelvetoone: this.state.Ftwelvetoone,
      Ftwelvetotwo: this.state.Ftwelvetotwo,
      Ftwelvetothree: this.state.Ftwelvetothree,
      Ftwelvetofour: this.state.Ftwelvetofour,
      Ftwelvetofive: this.state.Ftwelvetofive,
      Fonetotwo: this.state.Fonetotwo,
      Fonetothree: this.state.Fonetothree,
      Fonetofour: this.state.Fonetofour,
      Fonetofive: this.state.Fonetofive,
      Fonetothree: this.state.Fonetothree,
      Fonetofour: this.state.Fonetofour,
      Fonetofive: this.state.Fonetofive,
      Ftwotothree: this.state.Ftwotothree,
      Ftwotofour: this.state.Ftwotofour,
      Ftwotofive: this.state.Ftwotofive,
      Fthreetofour: this.state.Fthreetofour,
      Fthreetofive: this.state.Fthreetofive,
      Ffourtofive: this.state.Ffourtofive
    };

    //this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-timetable">
        <h4>Begining from 8.00 a.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">8.00-9.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttonine"
                  value={this.state.Meighttonine}
                  onChange={this.onChange}
                  error={errors.Meighttonine}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttonine"
                  value={this.state.Teighttonine}
                  onChange={this.onChange}
                  error={errors.Teighttonine}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttonine"
                  value={this.state.Weighttonine}
                  onChange={this.onChange}
                  error={errors.Weighttonine}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttonine"
                  value={this.state.THeighttonine}
                  onChange={this.onChange}
                  error={errors.THeighttonine}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttonine"
                  value={this.state.Feighttonine}
                  onChange={this.onChange}
                  error={errors.Feighttonine}
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
                  error={errors.Meighttoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttoten"
                  value={this.state.Teighttoten}
                  onChange={this.onChange}
                  error={errors.Teighttoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttoten"
                  value={this.state.Weighttoten}
                  onChange={this.onChange}
                  error={errors.Weighttoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttoten"
                  value={this.state.THeighttoten}
                  onChange={this.onChange}
                  error={errors.THeighttoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttoten"
                  value={this.state.Feighttoten}
                  onChange={this.onChange}
                  error={errors.Feighttoten}
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
                  error={errors.Meighttoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttoeleven"
                  value={this.state.Teighttoeleven}
                  onChange={this.onChange}
                  error={errors.Teighttoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttoeleven"
                  value={this.state.Weighttoeleven}
                  onChange={this.onChange}
                  error={errors.Weighttoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttoeleven"
                  value={this.state.THeighttoeleven}
                  onChange={this.onChange}
                  error={errors.THeighttoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttoeleven"
                  value={this.state.Feighttoeleven}
                  onChange={this.onChange}
                  error={errors.Feighttoeleven}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">8.00 a.m-12.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttotwelve"
                  value={this.state.Meighttotwelve}
                  onChange={this.onChange}
                  error={errors.Meighttotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttotwelve"
                  value={this.state.Teighttotwelve}
                  onChange={this.onChange}
                  error={errors.Teighttotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttotwelve"
                  value={this.state.Weighttotwelve}
                  onChange={this.onChange}
                  error={errors.Weighttotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttotwelve"
                  value={this.state.THeighttotwelve}
                  onChange={this.onChange}
                  error={errors.THeighttotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttotwelve"
                  value={this.state.Feighttotwelve}
                  onChange={this.onChange}
                  error={errors.Feighttotwelve}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">8.00 a.m-1.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttoone"
                  value={this.state.Meighttoone}
                  onChange={this.onChange}
                  error={errors.Meighttoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttoone"
                  value={this.state.Teighttoone}
                  onChange={this.onChange}
                  error={errors.Teighttoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttoone"
                  value={this.state.Weighttoone}
                  onChange={this.onChange}
                  error={errors.Weighttoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttoone"
                  value={this.state.THeighttoone}
                  onChange={this.onChange}
                  error={errors.THeighttoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttoone"
                  value={this.state.Feighttoone}
                  onChange={this.onChange}
                  error={errors.Feighttoone}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">8.00 a.m-2.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttotwo"
                  value={this.state.Meighttotwo}
                  onChange={this.onChange}
                  error={errors.Meighttotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttotwo"
                  value={this.state.Teighttotwo}
                  onChange={this.onChange}
                  error={errors.Teighttotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttotwo"
                  value={this.state.Weighttotwo}
                  onChange={this.onChange}
                  error={errors.Weighttotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttotwo"
                  value={this.state.THeighttotwo}
                  onChange={this.onChange}
                  error={errors.THeighttotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttotwo"
                  value={this.state.Feighttotwo}
                  onChange={this.onChange}
                  error={errors.Feighttotwo}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">8.00 a.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttothree"
                  value={this.state.Meighttothree}
                  onChange={this.onChange}
                  error={errors.Meighttothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttothree"
                  value={this.state.Teighttothree}
                  onChange={this.onChange}
                  error={errors.Teighttothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttothree"
                  value={this.state.Weighttothree}
                  onChange={this.onChange}
                  error={errors.Weighttothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttothree"
                  value={this.state.THeighttothree}
                  onChange={this.onChange}
                  error={errors.THeighttothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttothree"
                  value={this.state.Feighttothree}
                  onChange={this.onChange}
                  error={errors.Feighttothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">8.00 a.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttofour"
                  value={this.state.Meighttofour}
                  onChange={this.onChange}
                  error={errors.Meighttofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttofour"
                  value={this.state.Teighttofour}
                  onChange={this.onChange}
                  error={errors.Teighttofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttofour"
                  value={this.state.Weighttofour}
                  onChange={this.onChange}
                  error={errors.Weighttofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttofour"
                  value={this.state.THeighttofour}
                  onChange={this.onChange}
                  error={errors.THeighttofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttofour"
                  value={this.state.Feighttofour}
                  onChange={this.onChange}
                  error={errors.Feighttofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">8.00 a.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meighttofive"
                  value={this.state.Meighttofive}
                  onChange={this.onChange}
                  error={errors.Meighttofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Teighttofive"
                  value={this.state.Teighttofive}
                  onChange={this.onChange}
                  error={errors.Teighttofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weighttofive"
                  value={this.state.Weighttofive}
                  onChange={this.onChange}
                  error={errors.Weighttofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeighttofive"
                  value={this.state.THeighttofive}
                  onChange={this.onChange}
                  error={errors.THeighttofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feighttofive"
                  value={this.state.Feighttofive}
                  onChange={this.onChange}
                  error={errors.Feighttofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 9.00 a.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">9.00-10.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetoten"
                  value={this.state.Mninetoten}
                  onChange={this.onChange}
                  error={errors.Mninetoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetoten"
                  value={this.state.Tninetoten}
                  onChange={this.onChange}
                  error={errors.Tninetoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetoten"
                  value={this.state.Wninetoten}
                  onChange={this.onChange}
                  error={errors.Wninetoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetoten"
                  value={this.state.THninetoten}
                  onChange={this.onChange}
                  error={errors.THninetoten}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetoten"
                  value={this.state.Fninetoten}
                  onChange={this.onChange}
                  error={errors.Fninetoten}
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
                  error={errors.Mninetoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetoeleven"
                  value={this.state.Tninetoeleven}
                  onChange={this.onChange}
                  error={errors.Tninetoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetoeleven"
                  value={this.state.Wninetoeleven}
                  onChange={this.onChange}
                  error={errors.Wninetoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetoeleven"
                  value={this.state.THninetoeleven}
                  onChange={this.onChange}
                  error={errors.THninetoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetoeleven"
                  value={this.state.Fninetoeleven}
                  onChange={this.onChange}
                  error={errors.Fninetoeleven}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">9.00 a.m-12.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetotwelve"
                  value={this.state.Mninetotwelve}
                  onChange={this.onChange}
                  error={errors.Mninetotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetotwelve"
                  value={this.state.Tninetotwelve}
                  onChange={this.onChange}
                  error={errors.Tninetotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetotwelve"
                  value={this.state.Wninetotwelve}
                  onChange={this.onChange}
                  error={errors.Wninetotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetotwelve"
                  value={this.state.THninetotwelve}
                  onChange={this.onChange}
                  error={errors.THninetotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetotwelve"
                  value={this.state.Fninetotwelve}
                  onChange={this.onChange}
                  error={errors.Fninetotwelve}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">9.00 a.m-1.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetoone"
                  value={this.state.Mninetoone}
                  onChange={this.onChange}
                  error={errors.Mninetoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetoone"
                  value={this.state.Tninetoone}
                  onChange={this.onChange}
                  error={errors.Tninetoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetoone"
                  value={this.state.Wninetoone}
                  onChange={this.onChange}
                  error={errors.Wninetoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetoone"
                  value={this.state.THninetoone}
                  onChange={this.onChange}
                  error={errors.THninetoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetoone"
                  value={this.state.Fninetoone}
                  onChange={this.onChange}
                  error={errors.Fninetoone}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">9.00 a.m-2.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetotwo"
                  value={this.state.Mninetotwo}
                  onChange={this.onChange}
                  error={errors.Mninetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetotwo"
                  value={this.state.Tninetotwo}
                  onChange={this.onChange}
                  error={errors.Tninetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetotwo"
                  value={this.state.Wninetotwo}
                  onChange={this.onChange}
                  error={errors.Wninetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetotwo"
                  value={this.state.THninetotwo}
                  onChange={this.onChange}
                  error={errors.THninetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetotwo"
                  value={this.state.Fninetotwo}
                  onChange={this.onChange}
                  error={errors.Fninetotwo}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">9.00 a.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetothree"
                  value={this.state.Mninetothree}
                  onChange={this.onChange}
                  error={errors.Mninetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetothree"
                  value={this.state.Tninetothree}
                  onChange={this.onChange}
                  error={errors.Tninetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetothree"
                  value={this.state.Wninetothree}
                  onChange={this.onChange}
                  error={errors.Wninetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetothree"
                  value={this.state.THninetothree}
                  onChange={this.onChange}
                  error={errors.THninetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetothree"
                  value={this.state.Fninetothree}
                  onChange={this.onChange}
                  error={errors.Fninetothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">9.00 a.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetofour"
                  value={this.state.Mninetofour}
                  onChange={this.onChange}
                  error={errors.Mninetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetofour"
                  value={this.state.Tninetofour}
                  onChange={this.onChange}
                  error={errors.Tninetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetofour"
                  value={this.state.Wninetofour}
                  onChange={this.onChange}
                  error={errors.Wninetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetofour"
                  value={this.state.THninetofour}
                  onChange={this.onChange}
                  error={errors.THninetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetofour"
                  value={this.state.Fninetofour}
                  onChange={this.onChange}
                  error={errors.Fninetofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">9.00 a.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mninetofive"
                  value={this.state.Mninetofive}
                  onChange={this.onChange}
                  error={errors.Mninetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tninetofive"
                  value={this.state.Tninetofive}
                  onChange={this.onChange}
                  error={errors.Tninetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wninetofive"
                  value={this.state.Wninetofive}
                  onChange={this.onChange}
                  error={errors.Wninetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THninetofive"
                  value={this.state.THninetofive}
                  onChange={this.onChange}
                  error={errors.THninetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fninetofive"
                  value={this.state.Fninetofive}
                  onChange={this.onChange}
                  error={errors.Fninetofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 10.00 a.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">10.00-11.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentoeleven"
                  value={this.state.Mtentoeleven}
                  onChange={this.onChange}
                  error={errors.Mtentoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentoeleven"
                  value={this.state.Ttentoeleven}
                  onChange={this.onChange}
                  error={errors.Ttentoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentoeleven"
                  value={this.state.Wtentoeleven}
                  onChange={this.onChange}
                  error={errors.Wtentoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentoeleven"
                  value={this.state.THtentoeleven}
                  onChange={this.onChange}
                  error={errors.THtentoeleven}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentoeleven"
                  value={this.state.Ftentoeleven}
                  onChange={this.onChange}
                  error={errors.Ftentoeleven}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10.00 a.m-12.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentotwelve"
                  value={this.state.Mtentotwelve}
                  onChange={this.onChange}
                  error={errors.Mtentotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentotwelve"
                  value={this.state.Ttentotwelve}
                  onChange={this.onChange}
                  error={errors.Ttentotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentotwelve"
                  value={this.state.Wtentotwelve}
                  onChange={this.onChange}
                  error={errors.Wtentotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentotwelve"
                  value={this.state.THtentotwelve}
                  onChange={this.onChange}
                  error={errors.THtentotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentotwelve"
                  value={this.state.Ftentotwelve}
                  onChange={this.onChange}
                  error={errors.Ftentotwelve}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10.00 a.m-1.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentoone"
                  value={this.state.Mtentoone}
                  onChange={this.onChange}
                  error={errors.Mtentoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentoone"
                  value={this.state.Ttentoone}
                  onChange={this.onChange}
                  error={errors.Ttentoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentoone"
                  value={this.state.Wtentoone}
                  onChange={this.onChange}
                  error={errors.Wtentoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentoone"
                  value={this.state.THtentoone}
                  onChange={this.onChange}
                  error={errors.THtentoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentoone"
                  value={this.state.Ftentoone}
                  onChange={this.onChange}
                  error={errors.Ftentoone}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10.00 a.m-2.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentotwo"
                  value={this.state.Mtentotwo}
                  onChange={this.onChange}
                  error={errors.Mtentotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentotwo"
                  value={this.state.Ttentotwo}
                  onChange={this.onChange}
                  error={errors.Ttentotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentotwo"
                  value={this.state.Wtentotwo}
                  onChange={this.onChange}
                  error={errors.Wtentotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentotwo"
                  value={this.state.THtentotwo}
                  onChange={this.onChange}
                  error={errors.THtentotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentotwo"
                  value={this.state.Ftentotwo}
                  onChange={this.onChange}
                  error={errors.Ftentotwo}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10.00 a.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentothree"
                  value={this.state.Mtentothree}
                  onChange={this.onChange}
                  error={errors.Mtentothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentothree"
                  value={this.state.Ttentothree}
                  onChange={this.onChange}
                  error={errors.Ttentothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentothree"
                  value={this.state.Wtentothree}
                  onChange={this.onChange}
                  error={errors.Wtentothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentothree"
                  value={this.state.THtentothree}
                  onChange={this.onChange}
                  error={errors.THtentothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentothree"
                  value={this.state.Ftentothree}
                  onChange={this.onChange}
                  error={errors.Ftentothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10.00 a.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentofour"
                  value={this.state.Mtentofour}
                  onChange={this.onChange}
                  error={errors.Mtentofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentofour"
                  value={this.state.Ttentofour}
                  onChange={this.onChange}
                  error={errors.Ttentofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentofour"
                  value={this.state.Wtentofour}
                  onChange={this.onChange}
                  error={errors.Wtentofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentofour"
                  value={this.state.THtentofour}
                  onChange={this.onChange}
                  error={errors.THtentofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentofour"
                  value={this.state.Ftentofour}
                  onChange={this.onChange}
                  error={errors.Ftentofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10.00 a.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtentofive"
                  value={this.state.Mtentofive}
                  onChange={this.onChange}
                  error={errors.Mtentofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttentofive"
                  value={this.state.Ttentofive}
                  onChange={this.onChange}
                  error={errors.Ttentofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtentofive"
                  value={this.state.Wtentofive}
                  onChange={this.onChange}
                  error={errors.Wtentofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtentofive"
                  value={this.state.THtentofive}
                  onChange={this.onChange}
                  error={errors.THtentofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftentofive"
                  value={this.state.Ftentofive}
                  onChange={this.onChange}
                  error={errors.Ftentofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 11.00 a.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">11.00 a.m-12.00 a.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meleventotwelve"
                  value={this.state.Meleventotwelve}
                  onChange={this.onChange}
                  error={errors.Meleventotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Televentotwelve"
                  value={this.state.Televentotwelve}
                  onChange={this.onChange}
                  error={errors.Televentotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weleventotwelve"
                  value={this.state.Weleventotwelve}
                  onChange={this.onChange}
                  error={errors.Weleventotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeleventotwelve"
                  value={this.state.THeleventotwelve}
                  onChange={this.onChange}
                  error={errors.THeleventotwelve}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feleventotwelve"
                  value={this.state.Feleventotwelve}
                  onChange={this.onChange}
                  error={errors.Feleventotwelve}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11.00 a.m-1.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meleventoone"
                  value={this.state.Meleventoone}
                  onChange={this.onChange}
                  error={errors.Meleventoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Televentoone"
                  value={this.state.Televentoone}
                  onChange={this.onChange}
                  error={errors.Televentoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weleventoone"
                  value={this.state.Weleventoone}
                  onChange={this.onChange}
                  error={errors.Weleventoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeleventoone"
                  value={this.state.THeleventoone}
                  onChange={this.onChange}
                  error={errors.THeleventoone}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feleventoone"
                  value={this.state.Feleventoone}
                  onChange={this.onChange}
                  error={errors.Feleventoone}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11.00 a.m-2.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meleventotwo"
                  value={this.state.Meleventotwo}
                  onChange={this.onChange}
                  error={errors.Meleventotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Televentotwo"
                  value={this.state.Televentotwo}
                  onChange={this.onChange}
                  error={errors.Televentotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weleventotwo"
                  value={this.state.Weleventotwo}
                  onChange={this.onChange}
                  error={errors.Weleventotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeleventotwo"
                  value={this.state.THeleventotwo}
                  onChange={this.onChange}
                  error={errors.THeleventotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feleventotwo"
                  value={this.state.Feleventotwo}
                  onChange={this.onChange}
                  error={errors.Feleventotwo}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11.00 a.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meleventothree"
                  value={this.state.Meleventothree}
                  onChange={this.onChange}
                  error={errors.Meleventothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Televentothree"
                  value={this.state.Televentothree}
                  onChange={this.onChange}
                  error={errors.Televentothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weleventothree"
                  value={this.state.Weleventothree}
                  onChange={this.onChange}
                  error={errors.Weleventothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeleventothree"
                  value={this.state.THeleventothree}
                  onChange={this.onChange}
                  error={errors.THeleventothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feleventothree"
                  value={this.state.Feleventothree}
                  onChange={this.onChange}
                  error={errors.Feleventothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11.00 a.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meleventofour"
                  value={this.state.Meleventofour}
                  onChange={this.onChange}
                  error={errors.Meleventofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Televentofour"
                  value={this.state.Televentofour}
                  onChange={this.onChange}
                  error={errors.Televentofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weleventofour"
                  value={this.state.Weleventofour}
                  onChange={this.onChange}
                  error={errors.Weleventofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeleventofour"
                  value={this.state.THeleventofour}
                  onChange={this.onChange}
                  error={errors.THeleventofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feleventofour"
                  value={this.state.Feleventofour}
                  onChange={this.onChange}
                  error={errors.Feleventofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11.00 a.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Meleventofive"
                  value={this.state.Meleventofive}
                  onChange={this.onChange}
                  error={errors.Meleventofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Televentofive"
                  value={this.state.Televentofive}
                  onChange={this.onChange}
                  error={errors.Televentofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Weleventofive"
                  value={this.state.Weleventofive}
                  onChange={this.onChange}
                  error={errors.Weleventofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THeleventofive"
                  value={this.state.THeleventofive}
                  onChange={this.onChange}
                  error={errors.THeleventofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Feleventofive"
                  value={this.state.Feleventofive}
                  onChange={this.onChange}
                  error={errors.Feleventofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 12.00 p.m</h4>
        <table class="table table-striped table-dark">
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
            <th scope="row">12.00 p.m-1.00 p.m</th>
            <td>
              <TextFieldGroup
                placeholder=""
                name="Mtwelvetoone"
                value={this.state.Mtwelvetoone}
                onChange={this.onChange}
                error={errors.Mtwelvetoone}
              />
            </td>
            <td>
              <TextFieldGroup
                placeholder=""
                name="Ttwelvetoone"
                value={this.state.Ttwelvetoone}
                onChange={this.onChange}
                error={errors.Ttwelvetoone}
              />
            </td>
            <td>
              <TextFieldGroup
                placeholder=""
                name="Wtwelvetoone"
                value={this.state.Wtwelvetoone}
                onChange={this.onChange}
                error={errors.Wtwelvetoone}
              />
            </td>
            <td>
              <TextFieldGroup
                placeholder=""
                name="THtwelvetoone"
                value={this.state.THtwelvetoone}
                onChange={this.onChange}
                error={errors.THtwelvetoone}
              />
            </td>
            <td>
              <TextFieldGroup
                placeholder=""
                name="Ftwelvetoone"
                value={this.state.Ftwelvetoone}
                onChange={this.onChange}
                error={errors.Ftwelvetoone}
              />
            </td>

            <tr>
              <th scope="row">12.00 p.m-2.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwelvetotwo"
                  value={this.state.Mtwelvetotwo}
                  onChange={this.onChange}
                  error={errors.Mtwelvetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwelvetotwo"
                  value={this.state.Ttwelvetotwo}
                  onChange={this.onChange}
                  error={errors.Ttwelvetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwelvetotwo"
                  value={this.state.Wtwelvetotwo}
                  onChange={this.onChange}
                  error={errors.Wtwelvetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwelvetotwo"
                  value={this.state.THtwelvetotwo}
                  onChange={this.onChange}
                  error={errors.THtwelvetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwelvetotwo"
                  value={this.state.Ftwelvetotwo}
                  onChange={this.onChange}
                  error={errors.Ftwelvetotwo}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">12.00 p.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwelvetothree"
                  value={this.state.Mtwelvetothree}
                  onChange={this.onChange}
                  error={errors.Mtwelvetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwelvetothree"
                  value={this.state.Ttwelvetothree}
                  onChange={this.onChange}
                  error={errors.Ttwelvetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwelvetothree"
                  value={this.state.Wtwelvetothree}
                  onChange={this.onChange}
                  error={errors.Wtwelvetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwelvetothree"
                  value={this.state.THtwelvetothree}
                  onChange={this.onChange}
                  error={errors.THtwelvetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwelvetothree"
                  value={this.state.Ftwelvetothree}
                  onChange={this.onChange}
                  error={errors.Ftwelvetothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">12.00 p.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwelvetofour"
                  value={this.state.Mtwelvetofour}
                  onChange={this.onChange}
                  error={errors.Mtwelvetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwelvetofour"
                  value={this.state.Ttwelvetofour}
                  onChange={this.onChange}
                  error={errors.Ttwelvetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwelvetofour"
                  value={this.state.Wtwelvetofour}
                  onChange={this.onChange}
                  error={errors.Wtwelvetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwelvetofour"
                  value={this.state.THtwelvetofour}
                  onChange={this.onChange}
                  error={errors.THtwelvetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwelvetofour"
                  value={this.state.Ftwelvetofour}
                  onChange={this.onChange}
                  error={errors.Ftwelvetofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">12.00 p.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwelvetofive"
                  value={this.state.Mtwelvetofive}
                  onChange={this.onChange}
                  error={errors.Mtwelvetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwelvetofive"
                  value={this.state.Ttwelvetofive}
                  onChange={this.onChange}
                  error={errors.Ttwelvetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwelvetofive"
                  value={this.state.Wtwelvetofive}
                  onChange={this.onChange}
                  error={errors.Wtwelvetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwelvetofive"
                  value={this.state.THtwelvetofive}
                  onChange={this.onChange}
                  error={errors.THtwelvetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwelvetofive"
                  value={this.state.Ftwelvetofive}
                  onChange={this.onChange}
                  error={errors.Ftwelvetofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 1.00 p.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">1.00 p.m-2.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Monetotwo"
                  value={this.state.Monetotwo}
                  onChange={this.onChange}
                  error={errors.Monetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tonetotwo"
                  value={this.state.Tonetotwo}
                  onChange={this.onChange}
                  error={errors.Tonetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wonetotwo"
                  value={this.state.Wonetotwo}
                  onChange={this.onChange}
                  error={errors.Wonetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THonetotwo"
                  value={this.state.THonetotwo}
                  onChange={this.onChange}
                  error={errors.THonetotwo}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fonetotwo"
                  value={this.state.Fonetotwo}
                  onChange={this.onChange}
                  error={errors.Fonetotwo}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1.00 p.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Monetothree"
                  value={this.state.Monetothree}
                  onChange={this.onChange}
                  error={errors.Monetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tonetothree"
                  value={this.state.Tonetothree}
                  onChange={this.onChange}
                  error={errors.Tonetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wonetothree"
                  value={this.state.Wonetothree}
                  onChange={this.onChange}
                  error={errors.Wonetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THonetothree"
                  value={this.state.THonetothree}
                  onChange={this.onChange}
                  error={errors.THonetothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fonetothree"
                  value={this.state.Fonetothree}
                  onChange={this.onChange}
                  error={errors.Fonetothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1.00 p.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Monetofour"
                  value={this.state.Monetofour}
                  onChange={this.onChange}
                  error={errors.Monetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tonetofour"
                  value={this.state.Tonetofour}
                  onChange={this.onChange}
                  error={errors.Tonetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wonetofour"
                  value={this.state.Wonetofour}
                  onChange={this.onChange}
                  error={errors.Wonetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THonetofour"
                  value={this.state.THonetofour}
                  onChange={this.onChange}
                  error={errors.THonetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fonetofour"
                  value={this.state.Fonetofour}
                  onChange={this.onChange}
                  error={errors.Fonetofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1.00 p.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Monetofive"
                  value={this.state.Monetofive}
                  onChange={this.onChange}
                  error={errors.Monetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tonetofive"
                  value={this.state.Tonetofive}
                  onChange={this.onChange}
                  error={errors.Tonetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wonetofive"
                  value={this.state.Wonetofive}
                  onChange={this.onChange}
                  error={errors.Wonetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THonetofive"
                  value={this.state.THonetofive}
                  onChange={this.onChange}
                  error={errors.THonetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fonetofive"
                  value={this.state.Fonetofive}
                  onChange={this.onChange}
                  error={errors.Fonetofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 2.00 p.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">2.00 p.m-3.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwotothree"
                  value={this.state.Mtwotothree}
                  onChange={this.onChange}
                  error={errors.Mtwotothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwotothree"
                  value={this.state.Ttwotothree}
                  onChange={this.onChange}
                  error={errors.Ttwotothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwotothree"
                  value={this.state.Wtwotothree}
                  onChange={this.onChange}
                  error={errors.Wtwotothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwotothree"
                  value={this.state.THtwotothree}
                  onChange={this.onChange}
                  error={errors.THtwotothree}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwotothree"
                  value={this.state.Ftwotothree}
                  onChange={this.onChange}
                  error={errors.Ftwotothree}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">2.00 p.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwotofour"
                  value={this.state.Mtwotofour}
                  onChange={this.onChange}
                  error={errors.Mtwotofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwotofour"
                  value={this.state.Ttwotofour}
                  onChange={this.onChange}
                  error={errors.Ttwotofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwotofour"
                  value={this.state.Wtwotofour}
                  onChange={this.onChange}
                  error={errors.Wtwotofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwotofour"
                  value={this.state.THtwotofour}
                  onChange={this.onChange}
                  error={errors.THtwotofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwotofour"
                  value={this.state.Ftwotofour}
                  onChange={this.onChange}
                  error={errors.Ftwotofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">2.00 p.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mtwotofive"
                  value={this.state.Mtwotofive}
                  onChange={this.onChange}
                  error={errors.Mtwotofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ttwotofive"
                  value={this.state.Ttwotofive}
                  onChange={this.onChange}
                  error={errors.Ttwotofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wtwotofive"
                  value={this.state.Wtwotofive}
                  onChange={this.onChange}
                  error={errors.Wtwotofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THtwotofive"
                  value={this.state.THtwotofive}
                  onChange={this.onChange}
                  error={errors.THtwotofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ftwotofive"
                  value={this.state.Ftwotofive}
                  onChange={this.onChange}
                  error={errors.Ftwotofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 3.00 p.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">3.00 p.m-4.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mthreetofour"
                  value={this.state.Mthreetofour}
                  onChange={this.onChange}
                  error={errors.Mthreetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tthreetofour"
                  value={this.state.Tthreetofour}
                  onChange={this.onChange}
                  error={errors.Tthreetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wthreetofour"
                  value={this.state.Wthreetofour}
                  onChange={this.onChange}
                  error={errors.Wthreetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THthreetofour"
                  value={this.state.THthreetofour}
                  onChange={this.onChange}
                  error={errors.THthreetofour}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fthreetofour"
                  value={this.state.Fthreetofour}
                  onChange={this.onChange}
                  error={errors.Fthreetofour}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">3.00 p.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mthreetofive"
                  value={this.state.Mthreetofive}
                  onChange={this.onChange}
                  error={errors.Mthreetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tthreetofive"
                  value={this.state.Tthreetofive}
                  onChange={this.onChange}
                  error={errors.Tthreetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wthreetofive"
                  value={this.state.Wthreetofive}
                  onChange={this.onChange}
                  error={errors.Wthreetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THthreetofive"
                  value={this.state.THthreetofive}
                  onChange={this.onChange}
                  error={errors.THthreetofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Fthreetofive"
                  value={this.state.Fthreetofive}
                  onChange={this.onChange}
                  error={errors.Fthreetofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Begining from 4.00 p.m</h4>
        <table class="table table-striped table-dark">
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
            <tr>
              <th scope="row">4.00 p.m-5.00 p.m</th>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Mfourtofive"
                  value={this.state.Mfourtofive}
                  onChange={this.onChange}
                  error={errors.Mfourtofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Tfourtofive"
                  value={this.state.Tfourtofive}
                  onChange={this.onChange}
                  error={errors.Tfourtofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Wfourtofive"
                  value={this.state.Wfourtofive}
                  onChange={this.onChange}
                  error={errors.Wfourtofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="THfourtofive"
                  value={this.state.THfourtofive}
                  onChange={this.onChange}
                  error={errors.THfourtofive}
                />
              </td>
              <td>
                <TextFieldGroup
                  placeholder=""
                  name="Ffourtofive"
                  value={this.state.Ffourtofive}
                  onChange={this.onChange}
                  error={errors.Ffourtofive}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

CreateTimetable.propTypes = {
  timetable: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  timetable: state.timetable,
  errors: state.errors
});

export default connect(
  mapStateToProps
  //   { createTimetable }
)(withRouter(CreateTimetable));
