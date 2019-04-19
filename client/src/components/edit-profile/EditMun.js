import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { createMun, getCurrentMun } from "../../actions/munActions";
import isEmpty from "../../validation/is-empty";

class CreateMun extends Component {
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

  componentDidMount() {
    this.props.getCurrentMun();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mun.mun) {
      const mun = nextProps.mun.mun;

      const MeighttonineCSV = mun.Meighttonine.join(",");
      const MeighttotenCSV = mun.Meighttoten.join(",");
      const MeighttoelevenCSV = mun.Meighttoeleven.join(",");
      const MeighttotwelveCSV = mun.Meighttotwelve.join(",");
      const MeighttooneCSV = mun.Meighttoone.join(",");
      const MeighttotwoCSV = mun.Meighttotwo.join(",");
      const MeighttothreeCSV = mun.Meighttothree.join(",");
      const MeighttofourCSV = mun.Meighttofour.join(",");
      const MeighttofiveCSV = mun.Meighttofive.join(",");

      const TeighttonineCSV = mun.Teighttonine.join(",");
      const TeighttotenCSV = mun.Teighttoten.join(",");
      const TeighttoelevenCSV = mun.Teighttoeleven.join(",");
      const TeighttotwelveCSV = mun.Teighttotwelve.join(",");
      const TeighttooneCSV = mun.Teighttoone.join(",");
      const TeighttotwoCSV = mun.Teighttotwo.join(",");
      const TeighttothreeCSV = mun.Teighttothree.join(",");
      const TeighttofourCSV = mun.Teighttofour.join(",");
      const TeighttofiveCSV = mun.Teighttofive.join(",");

      const WeighttonineCSV = mun.Weighttonine.join(",");
      const WeighttotenCSV = mun.Weighttoten.join(",");
      const WeighttoelevenCSV = mun.Weighttoeleven.join(",");
      const WeighttotwelveCSV = mun.Weighttotwelve.join(",");
      const WeighttooneCSV = mun.Weighttoone.join(",");
      const WeighttotwoCSV = mun.Weighttotwo.join(",");
      const WeighttothreeCSV = mun.Weighttothree.join(",");
      const WeighttofourCSV = mun.Weighttofour.join(",");
      const WeighttofiveCSV = mun.Weighttofive.join(",");

      const THeighttonineCSV = mun.THeighttonine.join(",");
      const THeighttotenCSV = mun.THeighttoten.join(",");
      const THeighttoelevenCSV = mun.THeighttoeleven.join(",");
      const THeighttotwelveCSV = mun.THeighttotwelve.join(",");
      const THeighttooneCSV = mun.THeighttoone.join(",");
      const THeighttotwoCSV = mun.THeighttotwo.join(",");
      const THeighttothreeCSV = mun.THeighttothree.join(",");
      const THeighttofourCSV = mun.THeighttofour.join(",");
      const THeighttofiveCSV = mun.THeighttofive.join(",");

      const FeighttonineCSV = mun.Feighttonine.join(",");
      const FeighttotenCSV = mun.Feighttoten.join(",");
      const FeighttoelevenCSV = mun.Feighttoeleven.join(",");
      const FeighttotwelveCSV = mun.Feighttotwelve.join(",");
      const FeighttooneCSV = mun.Feighttoone.join(",");
      const FeighttotwoCSV = mun.Feighttotwo.join(",");
      const FeighttothreeCSV = mun.Feighttothree.join(",");
      const FeighttofourCSV = mun.Feighttofour.join(",");
      const FeighttofiveCSV = mun.Feighttofive.join(",");

      // MeighttonineCSV = !isEmpty(MeighttonineCSV) ? MeighttonineCSV : "";
      // MeighttotenCSV = !isEmpty(MeighttotenCSV) ? MeighttotenCSV : "";
      // MeighttoelevenCSV = !isEmpty(MeighttoelevenCSV) ? MeighttoelevenCSV : "";
      // MeighttotwelveCSV = !isEmpty(MeighttotwelveCSV) ? MeighttotwelveCSV : "";
      // MeighttooneCSV = !isEmpty(MeighttooneCSV) ? MeighttooneCSV : "";
      // MeighttotwoCSV = !isEmpty(MeighttotwoCSV) ? MeighttotwoCSV : "";
      // MeighttothreeCSV = !isEmpty(MeighttothreeCSV) ? MeighttothreeCSV : "";
      // MeighttofourCSV = !isEmpty(MeighttofourCSV) ? MeighttofourCSV : "";
      // MeighttofiveCSV = !isEmpty(MeighttofiveCSV) ? MeighttofiveCSV : "";

      // TeighttonineCSV = !isEmpty(TeighttonineCSV) ? TeighttonineCSV : "";
      // TeighttotenCSV = !isEmpty(TeighttotenCSV) ? TeighttotenCSV : "";
      // TeighttoelevenCSV = !isEmpty(TeighttoelevenCSV) ? TeighttoelevenCSV : "";
      // TeighttotwelveCSV = !isEmpty(TeighttotwelveCSV) ? TeighttotwelveCSV : "";
      // TeighttooneCSV = !isEmpty(TeighttooneCSV) ? TeighttooneCSV : "";
      // TeighttotwoCSV = !isEmpty(TeighttotwoCSV) ? TeighttotwoCSV : "";
      // TeighttothreeCSV = !isEmpty(TeighttothreeCSV) ? TeighttothreeCSV : "";
      // TeighttofourCSV = !isEmpty(TeighttofourCSV) ? TeighttofourCSV : "";
      // TeighttofiveCSV = !isEmpty(TeighttofiveCSV) ? TeighttofiveCSV : "";

      // WeighttonineCSV = !isEmpty(WeighttonineCSV) ? WeighttonineCSV : "";
      // WeighttotenCSV = !isEmpty(WeighttotenCSV) ? WeighttotenCSV : "";
      // WeighttoelevenCSV = !isEmpty(WeighttoelevenCSV) ? WeighttoelevenCSV : "";
      // WeighttotwelveCSV = !isEmpty(WeighttotwelveCSV) ? WeighttotwelveCSV : "";
      // WeighttooneCSV = !isEmpty(WeighttooneCSV) ? WeighttooneCSV : "";
      // WeighttotwoCSV = !isEmpty(WeighttotwoCSV) ? WeighttotwoCSV : "";
      // WeighttothreeCSV = !isEmpty(WeighttothreeCSV) ? WeighttothreeCSV : "";
      // WeighttofourCSV = !isEmpty(WeighttofourCSV) ? WeighttofourCSV : "";
      // WeighttofiveCSV = !isEmpty(WeighttofiveCSV) ? WeighttofiveCSV : "";

      // THeighttonineCSV = !isEmpty(THeighttonineCSV) ? THeighttonineCSV : "";
      // THeighttotenCSV = !isEmpty(THeighttotenCSV) ? THeighttotenCSV : "";
      // THeighttoelevenCSV = !isEmpty(THeighttoelevenCSV)
      //   ? THeighttoelevenCSV
      //   : "";
      // THeighttotwelveCSV = !isEmpty(THeighttotwelveCSV)
      //   ? THeighttotwelveCSV
      //   : "";
      // THeighttooneCSV = !isEmpty(THeighttooneCSV) ? THeighttooneCSV : "";
      // THeighttotwoCSV = !isEmpty(THeighttotwoCSV) ? THeighttotwoCSV : "";
      // THeighttothreeCSV = !isEmpty(THeighttothreeCSV) ? THeighttothreeCSV : "";
      // THeighttofourCSV = !isEmpty(THeighttofourCSV) ? THeighttofourCSV : "";
      // THeighttofiveCSV = !isEmpty(THeighttofiveCSV) ? THeighttofiveCSV : "";

      // FeighttonineCSV = !isEmpty(FeighttonineCSV) ? FeighttonineCSV : "";
      // FeighttotenCSV = !isEmpty(FeighttotenCSV) ? FeighttotenCSV : "";
      // FeighttoelevenCSV = !isEmpty(FeighttoelevenCSV) ? FeighttoelevenCSV : "";
      // FeighttotwelveCSV = !isEmpty(FeighttotwelveCSV) ? FeighttotwelveCSV : "";
      // FeighttooneCSV = !isEmpty(FeighttooneCSV) ? FeighttooneCSV : "";
      // FeighttotwoCSV = !isEmpty(FeighttotwoCSV) ? FeighttotwoCSV : "";
      // FeighttothreeCSV = !isEmpty(FeighttothreeCSV) ? FeighttothreeCSV : "";
      // FeighttofourCSV = !isEmpty(FeighttofourCSV) ? FeighttofourCSV : "";
      // FeighttofiveCSV = !isEmpty(FeighttofiveCSV) ? FeighttofiveCSV : "";

      this.setState({
        Meighttonine: MeighttonineCSV,
        Meighttoten: MeighttotenCSV,
        Meighttoeleven: MeighttoelevenCSV,
        Meighttotwelve: MeighttotwelveCSV,
        Meighttoone: MeighttooneCSV,
        Meighttotwo: MeighttotwoCSV,
        Meighttothree: MeighttothreeCSV,
        Meighttofour: MeighttofourCSV,
        Meighttofive: MeighttofiveCSV,

        Teighttonine: TeighttonineCSV,
        Teighttoten: TeighttotenCSV,
        Teighttoeleven: TeighttoelevenCSV,
        Teighttotwelve: TeighttotwelveCSV,
        Teighttoone: TeighttooneCSV,
        Teighttotwo: TeighttotwoCSV,
        Teighttothree: TeighttothreeCSV,
        Teighttofour: TeighttofourCSV,
        Teighttofive: TeighttofiveCSV,

        Weighttonine: WeighttonineCSV,
        Weighttoten: WeighttotenCSV,
        Weighttoeleven: WeighttoelevenCSV,
        Weighttotwelve: WeighttotwelveCSV,
        Weighttoone: WeighttooneCSV,
        Weighttotwo: WeighttotwoCSV,
        Weighttothree: WeighttothreeCSV,
        Weighttofour: WeighttofourCSV,
        Weighttofive: WeighttofiveCSV,

        THeighttonine: THeighttonineCSV,
        THeighttoten: THeighttotenCSV,
        THeighttoeleven: THeighttoelevenCSV,
        THeighttotwelve: THeighttotwelveCSV,
        THeighttoone: THeighttooneCSV,
        THeighttotwo: THeighttotwoCSV,
        THeighttothree: THeighttothreeCSV,
        THeighttofour: THeighttofourCSV,
        THeighttofive: THeighttofiveCSV,

        Feighttonine: FeighttonineCSV,
        Feighttoten: FeighttotenCSV,
        Feighttoeleven: FeighttoelevenCSV,
        Feighttotwelve: FeighttotwelveCSV,
        Feighttoone: FeighttooneCSV,
        Feighttotwo: FeighttotwoCSV,
        Feighttothree: FeighttothreeCSV,
        Feighttofour: FeighttofourCSV,
        Feighttofive: FeighttofiveCSV
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const munData = {
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

    this.props.createMun(munData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // Select options for status

    return (
      <div className="edit-profile">
        <Link to="/timetableactions" className="btn btn-light">
          Go Back
        </Link>
        <h1 className="display-4 text-center">Edit Time Table</h1>
        <p className="lead text-center">
          This is for resheduling and other staffs
        </p>
        <small className="d-block pb-3" />
        <form onSubmit={this.onSubmit}>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">time</th>
                <th scope="col" className="text-success">
                  <strong>Monday</strong>
                </th>
                <th scope="col" className="text-success">
                  <strong>Tuesday</strong>
                </th>
                <th scope="col" className="text-success">
                  <strong>Wenesday</strong>
                </th>
                <th scope="col" className="text-success">
                  <strong>Thursday</strong>
                </th>
                <th scope="col" className="text-success">
                  <strong>Friday</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-primary">
                  08.00a.m-09.00a.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-10.00a.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-11.00a.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-12.00p.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-01.00p.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-02.00p.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-03.00p.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-04.00p.m
                </th>
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
                <th scope="row" className="text-primary">
                  08.00a.m-05.00p.m
                </th>
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

CreateMun.propTypes = {
  createMun: PropTypes.func.isRequired,
  getCurrentMun: PropTypes.func.isRequired,
  mun: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mun: state.mun
});

export default connect(
  mapStateToProps,
  { createMun, getCurrentMun }
)(withRouter(CreateMun));
