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
    let socialInputs;
    const { nine } = this.props.nine;

    if (this.state.dayofweek == "Monday") {
      socialInputs = (
        <div>
          <ul className="list-group">
            {nine.Meighttonine.slice(0, 4).map((skill, index) => (
              <li key={index} className="list-group-item">
                {/* <i className="fa fa-check pr-1" /> */}
                {skill === this.state.hallname ? "Avaialable" : null}
              </li>
            ))}
          </ul>
        </div>
      );
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
                {socialInputs}
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
