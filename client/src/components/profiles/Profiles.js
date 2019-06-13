import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import Profileitem from "./Profileitem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: "tharindu"
    };
  }
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {

    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <Profileitem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      let xx = 0; let name = "tharindu"

      if (profiles.length > 0 || profiles.length === 0) {
        profileItems = profiles.map(profile => (
          <div>
          
            <h1>{profile.status}</h1>

          </div>


        ));

      }
      
    }





    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer profile</h1>
              <p className="lead text-center">
                Browse and connect with profiles
              </p>
              {profileItems}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
