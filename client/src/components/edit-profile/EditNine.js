import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { createNine, getCurrentNine } from "../../actions/nineActions";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";


class CreateNine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Meighttonine: "",
      Mninetoten: "",
      Mtentoeleven: "",
      Meleventotwelve: "",
      Mtwelvetoone: "",
      Monetotwo: "",
      Mtwotothree: "",
      Mthreetofour: "",
      Mfourtofive: "",

      Teighttonine: "",
      Tninetoten: "",
      Ttentoeleven: "",
      Televentotwelve: "",
      Ttwelvetoone: "",
      Tonetotwo: "",
      Ttwotothree: "",
      Tthreetofour: "",
      Tfourtofive: "",

      Weighttonine: "",
      Wninetoten: "",
      Wtentoeleven: "",
      Weleventotwelve: "",
      Wtwelvetoone: "",
      Wonetotwo: "",
      Wtwotothree: "",
      Wthreetofour: "",
      Wfourtofive: "",

      THeighttonine: "",
      THninetoten: "",
      THtentoeleven: "",
      THeleventotwelve: "",
      THtwelvetoone: "",
      THonetotwo: "",
      THtwotothree: "",
      THthreetofour: "",
      THfourtofive: "",

      Feighttonine: "",
      Fninetoten: "",
      Ftentoeleven: "",
      Feleventotwelve: "",
      Ftwelvetoone: "",
      Fonetotwo: "",
      Ftwotothree: "",
      Fthreetofour: "",
      Ffourtofive: ""
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

      // const MninetotenCSV = nine.Mninetoten.join(",");
      const MeighttonineCSV = nine.Meighttonine.join(",");
      const MninetotenCSV = nine.Mninetoten.join(",");
      const MtentoelevenCSV = nine.Mtentoeleven.join(",");
      const MeleventotwelveCSV = nine.Meleventotwelve.join(",");
      const MtwelvetooneCSV = nine.Mtwelvetoone.join(",");
      const MonetotwoCSV = nine.Monetotwo.join(",");
      const MtwotothreeCSV = nine.Mtwotothree.join(",");
      const MthreetofourCSV = nine.Mthreetofour.join(",");
      const MfourtofiveCSV = nine.Mfourtofive.join(",");

      const TeighttonineCSV = nine.Teighttonine.join(",");
      const TninetotenCSV = nine.Tninetoten.join(",");
      const TtentoelevenCSV = nine.Ttentoeleven.join(",");
      const TeleventotwelveCSV = nine.Televentotwelve.join(",");
      const TtwelvetooneCSV = nine.Ttwelvetoone.join(",");
      const TonetotwoCSV = nine.Tonetotwo.join(",");
      const TtwotothreeCSV = nine.Ttwotothree.join(",");
      const TthreetofourCSV = nine.Tthreetofour.join(",");
      const TfourtofiveCSV = nine.Tfourtofive.join(",");

      const WeighttonineCSV = nine.Weighttonine.join(",");
      const WninetotenCSV = nine.Wninetoten.join(",");
      const WtentoelevenCSV = nine.Wtentoeleven.join(",");
      const WeleventotwelveCSV = nine.Weleventotwelve.join(",");
      const WtwelvetooneCSV = nine.Wtwelvetoone.join(",");
      const WonetotwoCSV = nine.Wonetotwo.join(",");
      const WtwotothreeCSV = nine.Wtwotothree.join(",");
      const WthreetofourCSV = nine.Wthreetofour.join(",");
      const WfourtofiveCSV = nine.Wfourtofive.join(",");

      const THeighttonineCSV = nine.THeighttonine.join(",");
      const THninetotenCSV = nine.THninetoten.join(",");
      const THtentoelevenCSV = nine.THtentoeleven.join(",");
      const THeleventotwelveCSV = nine.THeleventotwelve.join(",");
      const THtwelvetooneCSV = nine.THtwelvetoone.join(",");
      const THonetotwoCSV = nine.THonetotwo.join(",");
      const THtwotothreeCSV = nine.THtwotothree.join(",");
      const THthreetofourCSV = nine.THthreetofour.join(",");
      const THfourtofiveCSV = nine.THfourtofive.join(",");

      const FeighttonineCSV = nine.Feighttonine.join(",");
      const FninetotenCSV = nine.Fninetoten.join(",");
      const FtentoelevenCSV = nine.Ftentoeleven.join(",");
      const FeleventotwelveCSV = nine.Feleventotwelve.join(",");
      const FtwelvetooneCSV = nine.Ftwelvetoone.join(",");
      const FonetotwoCSV = nine.Fonetotwo.join(",");
      const FtwotothreeCSV = nine.Ftwotothree.join(",");
      const FthreetofourCSV = nine.Fthreetofour.join(",");
      const FfourtofiveCSV = nine.Ffourtofive.join(",");

      this.setState({
        //Mninetoten: MninetotenCSV,

        Meighttonine: MeighttonineCSV,
        Mninetoten: MninetotenCSV,
        Mtentoeleven: MtentoelevenCSV,
        Meleventotwelve: MeleventotwelveCSV,
        Mtwelvetoone: MtwelvetooneCSV,
        Monetotwo: MonetotwoCSV,
        Mtwotothree: MtwotothreeCSV,
        Mthreetofour: MthreetofourCSV,
        Mfourtofive: MfourtofiveCSV,

        Teighttonine: TeighttonineCSV,
        Tninetoten: TninetotenCSV,
        Ttentoeleven: TtentoelevenCSV,
        Televentotwelve: TeleventotwelveCSV,
        Ttwelvetoone: TtwelvetooneCSV,
        Tonetotwo: TonetotwoCSV,
        Ttwotothree: TtwotothreeCSV,
        Tthreetofour: TthreetofourCSV,
        Tfourtofive: TfourtofiveCSV,

        Weighttonine: WeighttonineCSV,
        Wninetoten: WninetotenCSV,
        Wtentoeleven: WtentoelevenCSV,
        Weleventotwelve: WeleventotwelveCSV,
        Wtwelvetoone: WtwelvetooneCSV,
        Wonetotwo: WonetotwoCSV,
        Wtwotothree: WtwotothreeCSV,
        Wthreetofour: WthreetofourCSV,
        Wfourtofive: WfourtofiveCSV,

        THeighttonine: THeighttonineCSV,
        THninetoten: THninetotenCSV,
        THtentoeleven: THtentoelevenCSV,
        THeleventotwelve: THeleventotwelveCSV,
        THtwelvetoone: THtwelvetooneCSV,
        THonetotwo: THonetotwoCSV,
        THtwotothree: THtwotothreeCSV,
        THthreetofour: THthreetofourCSV,
        THfourtofive: THfourtofiveCSV,

        Feighttonine: FeighttonineCSV,
        Fninetoten: FninetotenCSV,
        Ftentoeleven: FtentoelevenCSV,
        Feleventotwelve: FeleventotwelveCSV,
        Ftwelvetoone: FtwelvetooneCSV,
        Fonetotwo: FonetotwoCSV,
        Ftwotothree: FtwotothreeCSV,
        Fthreetofour: FthreetofourCSV,
        Ffourtofive: FfourtofiveCSV
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const nineData = {
      //Mninetoten: this.state.Mninetoten,

      Meighttonine: this.state.Meighttonine,
      Mninetoten: this.state.Mninetoten,
      Mtentoeleven: this.state.Mtentoeleven,
      Meleventotwelve: this.state.Meleventotwelve,
      Mtwelvetoone: this.state.Mtwelvetoone,
      Monetotwo: this.state.Monetotwo,
      Mtwotothree: this.state.Mtwotothree,
      Mthreetofour: this.state.Mthreetofour,
      Mfourtofive: this.state.Mfourtofive,

      Teighttonine: this.state.Teighttonine,
      Tninetoten: this.state.Tninetoten,
      Ttentoeleven: this.state.Ttentoeleven,
      Televentotwelve: this.state.Televentotwelve,
      Ttwelvetoone: this.state.Ttwelvetoone,
      Tonetotwo: this.state.Tonetotwo,
      Ttwotothree: this.state.Ttwotothree,
      Tthreetofour: this.state.Tthreetofour,
      Tfourtofive: this.state.Tfourtofive,

      Weighttonine: this.state.Weighttonine,
      Wninetoten: this.state.Wninetoten,
      Wtentoeleven: this.state.Wtentoeleven,
      Weleventotwelve: this.state.Weleventotwelve,
      Wtwelvetoone: this.state.Wtwelvetoone,
      Wonetotwo: this.state.Wonetotwo,
      Wtwotothree: this.state.Wtwotothree,
      Wthreetofour: this.state.Wthreetofour,
      Wfourtofive: this.state.Wfourtofive,

      THeighttonine: this.state.THeighttonine,
      THninetoten: this.state.THninetoten,
      THtentoeleven: this.state.THtentoeleven,
      THeleventotwelve: this.state.THeleventotwelve,
      THtwelvetoone: this.state.THtwelvetoone,
      THonetotwo: this.state.THonetotwo,
      THtwotothree: this.state.THtwotothree,
      THthreetofour: this.state.THthreetofour,
      THfourtofive: this.state.THfourtofive,

      Feighttonine: this.state.Feighttonine,
      Fninetoten: this.state.Fninetoten,
      Ftentoeleven: this.state.Ftentoeleven,
      Feleventotwelve: this.state.Feleventotwelve,
      Ftwelvetoone: this.state.Ftwelvetoone,
      Fonetotwo: this.state.Fonetotwo,
      Ftwotothree: this.state.Ftwotothree,
      Fthreetofour: this.state.Fthreetofour,
      Ffourtofive: this.state.Ffourtofive
    };

    this.props.createNine(nineData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // Select options for status

    return (
      <MDBRow>
      <div className="col-sm-3 " />
      <div className="col-sm-9">
        <MDBCol md="20">
          <MDBCard className="mt-5">
          <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Time Table</strong>
                  </h4>
                </MDBView>
      <div className="create-nine">
       
       
      
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
              <tr>
                <th scope="row">08.00-09.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meighttonine"
                    value={this.state.Meighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Teighttonine"
                    value={this.state.Teighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weighttonine"
                    value={this.state.Weighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeighttonine"
                    value={this.state.THeighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feighttonine"
                    value={this.state.Feighttonine}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">09.00-10.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mninetoten"
                    value={this.state.Mninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tninetoten"
                    value={this.state.Tninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wninetoten"
                    value={this.state.Wninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THninetoten"
                    value={this.state.THninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fninetoten"
                    value={this.state.Fninetoten}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">10.00-11.00 a.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtentoeleven"
                    value={this.state.Mtentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttentoeleven"
                    value={this.state.Ttentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtentoeleven"
                    value={this.state.Wtentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtentoeleven"
                    value={this.state.THtentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftentoeleven"
                    value={this.state.Ftentoeleven}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">11.00-12.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Meleventotwelve"
                    value={this.state.Meleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Televentotwelve"
                    value={this.state.Televentotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Weleventotwelve"
                    value={this.state.Weleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THeleventotwelve"
                    value={this.state.THeleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Feleventotwelve"
                    value={this.state.Feleventotwelve}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">12.00-01.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtwelvetoone"
                    value={this.state.Mtwelvetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttwelvetoone"
                    value={this.state.Ttwelvetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtwelvetoone"
                    value={this.state.Wtwelvetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtwelvetoone"
                    value={this.state.THtwelvetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftwelvetoone"
                    value={this.state.Ftwelvetoone}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">01.00-02.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Monetotwo"
                    value={this.state.Monetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tonetotwo"
                    value={this.state.Tonetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wonetotwo"
                    value={this.state.Wonetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THonetotwo"
                    value={this.state.THonetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fonetotwo"
                    value={this.state.Fonetotwo}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">02.00-03.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mtwotothree"
                    value={this.state.Mtwotothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ttwotothree"
                    value={this.state.Ttwotothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wtwotothree"
                    value={this.state.Wtwotothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THtwotothree"
                    value={this.state.THtwotothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ftwotothree"
                    value={this.state.Ftwotothree}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">03.00-04.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mthreetofour"
                    value={this.state.Mthreetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tthreetofour"
                    value={this.state.Tthreetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wthreetofour"
                    value={this.state.Wthreetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THthreetofour"
                    value={this.state.THthreetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Fthreetofour"
                    value={this.state.Fthreetofour}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">04.00-05.00 p.m</th>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Mfourtofive"
                    value={this.state.Mfourtofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Tfourtofive"
                    value={this.state.Tfourtofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Wfourtofive"
                    value={this.state.Wfourtofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="THfourtofive"
                    value={this.state.THfourtofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    name="Ffourtofive"
                    value={this.state.Ffourtofive}
                    onChange={this.onChange}
                    info="please use comma seperated values (eg: E001,E002,E201)"
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
    
      </MDBCard>
            </MDBCol>
          </div>
        </MDBRow>
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
