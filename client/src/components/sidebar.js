import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";

class sidebar extends Component {
    render() {
        const { user } = this.props.auth;
        let abc = (
            <div>
                {user.role === "Acadamic" ? (
                    <div className="sidebar-fixed position-fixed">
                    <a href="#!" className="logo-wrapper waves-effect">
                        <img alt="MDB React Logo" className="img-fluid" src={logo}/>
                    </a>
                    <MDBListGroup className="list-group-flush">
                        
                        <NavLink to="/ViewNine" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="user" className="mr-3"/>
                                Time Tables
                            </MDBListGroupItem>
                        </NavLink>
                       
                        <NavLink to="/HallSelect" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="far fa-check-circle" className="mr-3"/>
                                Hall Booking
                            </MDBListGroupItem>
                        </NavLink>
                      
                        <NavLink to="/ViewHallList" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="far fa-check-circle" className="mr-3"/>
                                Hall List
                            </MDBListGroupItem>
                        </NavLink>
                      
                       
                    </MDBListGroup>
                </div>
                ) : null}
            
        </div>
            
        )

        return (
            <div>
                {abc}
            </div>
        );
            
        
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
    {}
  )(sidebar);