import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default class sidebar extends Component {
    render() {
        const { user } = this.props.auth;

        return (
            <div>
                
            </div>
        )
    }
}

sidebar.propTypes = {
    
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,

  )(sidebar);