import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import Hallitem from "./Hallitem";
import { getHallregs } from "../../actions/hallregActions";

class Halls extends Component {
    componentDidMount() {
        this.props.getHallregs();
    }

    render() {
        const { hallregs, loading } = this.props.hallreg;
        let hallItems;

        if (hallregs === null || loading) {
            hallItems = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} />
                ));
            } else {
                hallItems = <h4>No profiles found...</h4>;
            }
        }

        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">halls</h1>
                            <p className="lead text-center">
                                Browse and connect with profiles
              </p>
                            {hallItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Halls.propTypes = {
    getHallregs: PropTypes.func.isRequired,
    hallreg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    hallreg: state.hallreg
});

export default connect(
    mapStateToProps,
    { getHallregs }
)(Halls);
