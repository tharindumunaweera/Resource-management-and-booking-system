import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      role: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/register");
    }
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registeruser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state; //const errors = this.state.errors;

    const options = [
      { label: "Select Actor", value: 0 },
      { label: "Acadamic", value: "Acadamic" },
      { label: "Ref", value: "Ref" },
      { label: "Lecturer", value: "Lecturer" },
      { label: "Director", value: "Director" },
      { label: "Coordinator", value: "Coordinator" },
      { label: "Admin", value: "Admin" }
    ];

    return (
<<<<<<< HEAD

      <div className="register  ">
        <div className=" landing-inner">
          <div className="  container">
            <div className="card mb-5 border-10">
              <Navbar />
              <div className=" row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center"><strong>Sign Up</strong></h1>
                  <p className="lead text-center"><strong>Create Your RMIS Account</strong></p>
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      info="This site uses Gravatar so if you want a profile image,use a Gravatar email"
                    />
                    <SelectListGroup
                      placeholder="Actor"
                      name="role"
                      value={this.state.role}
                      onChange={this.onChange}
                      options={options}
                      error={errors.role}
                    />
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                    <TextFieldGroup
                      placeholder="Conform Password"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
              <Footer />
            </div>

          </div>
        </div>
=======
     
      
      <div className="register  ">
        {/* <div className=" landing-inner">
        <div className="  container">
        <div className="card mb-5 border-10">
        <Navbar />
          <div className=" row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"><strong>Sign Up</strong></h1>
              <p className="lead text-center"><strong>Create Your RMIS Account</strong></p> */}
               <MDBRow>
          <div className="col-sm-4 " />
          <div className="col-sm-7 ">
            <MDBCol md="13">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Sign Up Form</strong>
                  </h4>
                </MDBView>
                <MDBCardBody>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                 
                />
                <SelectListGroup
                  placeholder="Actor"
                  name="role"
                  value={this.state.role}
                  onChange={this.onChange}
                  options={options}
                  error={errors.role}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Conform Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        </MDBRow>
>>>>>>> 49e6e40d06327c025812d6e3b10b13811daa4f18
      </div>

    );
  }
}

Register.propTypes = {
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(Register));
