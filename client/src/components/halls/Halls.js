import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import Hallitem from "./Hallitem";
import { getHallregs } from "../../actions/hallregActions";

class Halls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // seat1: 50,
            //  seat2: 100,
            //  seat3: 150,
            current1: false,
            current2: false,
            current3: false,

        };

        this.onChange = this.onChange.bind(this);

        this.onCheck = this.onCheck.bind(this);
    }


    componentDidMount() {
        this.props.getHallregs();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onCheck(e) {

        this.setState({

            current1: !this.state.current1
        });


    }

    render() {
        let hallItems;
        if (this.state.current1 === true) {
            const { hallregs, loading } = this.props.hallreg;


            if (hallregs === null || loading) {
                hallItems = <Spinner />;
            } else {
                if (hallregs.length > 0) {
                    hallItems = hallregs.map(hallreg => (
                        <Hallitem key={hallreg._id} hallreg={hallreg} seat1="68" />
                    ));
                } else {
                    hallItems = <h4>No profiles found...</h4>;
                }
            }
        }

        return (
            <div className="halls">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 style">
                            <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current1"
                                    value={this.state.current1}
                                    checked={this.state.current1}
                                    onChange={this.onCheck}
                                    id="current1"
                                />
                                <label htmlFor="current" className="form-check-label">
                                    Above 50
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-4 style">
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
