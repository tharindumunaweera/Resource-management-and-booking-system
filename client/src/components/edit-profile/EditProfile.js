import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      handle: "",
      // company: "",
      // website: "",
      // location: "",
      status: "",
      skills: "",
      // githubusername: "",
      bio: "",
      // twitter: "",
      // facebook: "",
      // linkedin: "",
      // youtube: "",
      // instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      //Bring skills array to comma seperated value
      const skillsCSV = profile.skills.join(",");

      //If profile field doesnt exist, make empty string
      // profile.company = !isEmpty(profile.company) ? profile.company : "";
      // profile.website = !isEmpty(profile.website) ? profile.website : "";
      // profile.location = !isEmpty(profile.location) ? profile.location : "";
      // profile.githubusername = !isEmpty(profile.githubusername)
      //   ? profile.githubusername
      //   : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      // profile.social = !isEmpty(profile.social) ? profile.social : {};
      // profile.twitter = !isEmpty(profile.social.twitter)
      //   ? profile.social.twitter
      //   : "";
      // profile.facebook = !isEmpty(profile.social.facebook)
      //   ? profile.social.facebook
      //   : "";
      // profile.linkedin = !isEmpty(profile.social.linkedin)
      //   ? profile.social.linkedin
      //   : "";
      // profile.youtube = !isEmpty(profile.social.youtube)
      //   ? profile.social.youtube
      //   : "";
      // profile.instagram = !isEmpty(profile.social.instagram)
      //   ? profile.social.instagram
      //   : "";

      // Set  component fields state
      this.setState({
        handle: profile.handle,
        // company: profile.company,
        // website: profile.website,
        // location: profile.location.location,
        status: profile.status,
        skills: skillsCSV,
        // githubusername: profile.githubusername,
        bio: profile.bio
        // twitter: profile.twitter,
        // facebook: profile.facebook,
        // linkedin: profile.linkedin,
        // youtube: profile.youtube,
        // instagram: profile.instagram
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      // company: this.state.company,
      // website: this.state.website,
      // location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      // githubusername: this.state.githubusername,
      bio: this.state.bio
      // twitter: this.state.twitter,
      // facebook: this.state.facebook,
      // linkedin: this.state.linkedin,
      // youtube: this.state.youtube,
      // instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    const { user } = this.props.auth;

    // Select options for status
    const options = [
      { label: "* Select Proffessional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learningr" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Other", value: "Other" }
    ];

    const options1 = [
      { label: "* Select Possition In Union", value: 0 },
      { label: "Member", value: "Member" },
      { label: "President", value: "President" },
      { label: "Vice President", value: "Vice President" },
      { label: "Treasure", value: "Treasure" },
      { label: "Secreatry", value: "Secreatry" }
    ];

    const options2 = [
      { label: "* Select Possition", value: 0 },
      { label: "Professor", value: "Professor" },
      { label: "Lecturer", value: "Lecturer" },
      { label: "Instructor", value: "Instructor" }
    ];

    let dashboardContent;

    if (user.role == "Ref") {
      dashboardContent = (
        <div>
          <TextFieldGroup
            placeholder="* Profile handle"
            name="handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="A unique handle for your profile URL. your full name,company name"
          />
          <SelectListGroup
            placeholder="Status"
            name="status"
            value={this.state.status}
            onChange={this.onChange}
            options={options1}
            error={errors.status}
            info="Give us idea about your possition in acadamic branch"
          />
          <TextFieldGroup
            placeholder="* Skills"
            name="skills"
            value={this.state.skills}
            onChange={this.onChange}
            error={errors.skills}
            info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
          />
          <TextAreaFieldGroup
            placeholder="Short Bio"
            name="bio"
            value={this.state.bio}
            onChange={this.onChange}
            error={errors.bio}
          />
        </div>
      );
    }

    if (user.role == "Acadamic") {
      dashboardContent = (
        <div>
          <TextFieldGroup
            placeholder="* Profile handle"
            name="handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="A unique handle for your profile URL. your full name,company name"
          />
          <SelectListGroup
            placeholder="Status"
            name="status"
            value={this.state.status}
            onChange={this.onChange}
            options={options}
            error={errors.status}
            info="Give us idea about your possition in acadamic branch"
          />
          <TextFieldGroup
            placeholder="* Skills"
            name="skills"
            value={this.state.skills}
            onChange={this.onChange}
            error={errors.skills}
            info="please use comma seperated values (eg: HTML,CSS,JavaScript,PHP)"
          />
          <TextAreaFieldGroup
            placeholder="Short Bio"
            name="bio"
            value={this.state.bio}
            onChange={this.onChange}
            error={errors.bio}
          />
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Your Profile</h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                {dashboardContent}
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

CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
