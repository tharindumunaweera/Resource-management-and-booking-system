import React from 'react';
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import HallSelect from "./HallSelect/HallSelect";

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">

                <NavLink  to="/register" activeClassName="activeClass">
                    <MDBListGroupItem>
                       <MDBIcon icon="chart-pie" className="mr-3"/>              
                       User Registration
                    </MDBListGroupItem>
                </NavLink>
           
               
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;