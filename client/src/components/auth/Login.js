import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginuser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      const { user } = this.props.auth;
      if (user.role === "Ref") {
        this.props.history.push("/UnionStudent");
      }
      if (user.role === "Acadamic") {
        this.props.history.push("/dashboard");
      }
      // if (user.role == "Acadamic") {
      //   this.props.history.push("/AcademicStaff");
      // }
      if (user.role === "Director") {
        this.props.history.push("/Director");
      }
      if (user.role === "Coordinator") {
        this.props.history.push("/Coordinator");
      }
      if (user.role === "Lecturer") {
        this.props.history.push("/Lecturer");
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      const { user } = this.props.auth;
      if (user.role == "Ref") {
        this.props.history.push("/UnionStudent");
      }
      // if (user.role == "Acadamic") {
      //   this.props.history.push("/dashboard");
      // }
      if (user.role == "Acadamic") {
        this.props.history.push("/AcademicStaff");
      }
      if (user.role == "Director") {
        this.props.history.push("/Director");
      }
      if (user.role == "Coordinator") {
        this.props.history.push("/Coordinator");
      }
      if (user.role == "Lecturer") {
        this.props.history.push("/Lecturer");
      }
      //this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginuser(user);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className=" landing-inner  ">
          <div className="container">
            <div className="card mb-5 border-10">
              <Navbar />
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">
                    {" "}
                    <strong> Sign In </strong>{" "}
                  </h1>
                  <p className="lead text-center">
                    <strong> Sign In To Your RMIS Account</strong>
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />

                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />

                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginuser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginuser }
)(Login);
