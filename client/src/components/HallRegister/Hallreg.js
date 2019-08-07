import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

import { createHallreg } from '../../actions/hallregActions';

class CreateHallreg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hallname: '',
            location: '',
            seat: 0,
            projecter: 0,
            whiteboard: 0,
            other: '',

           


        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            hallname: this.state.hallname,
            location: this.state.location,
            seat: this.state.seat,
            projecter: this.state.projecter,
            whiteboard: this.state.whiteboard,
            other: this.state.other,

        };

        this.props.createHallreg(profileData, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        // const { errors } = this.state;



        // Select options for status


        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create Your Profile</h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="Hall name"
                                    name="hallname"
                                    value={this.state.hallname}
                                    onChange={this.onChange}
                                />
                                <div>{this.state.hallnameerror}</div>

                                <TextFieldGroup
                                    placeholder="location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                />
                                <div>{this.state.locationerror}</div>

                                <TextFieldGroup
                                    placeholder="seat"
                                    type="number"
                                    name="seat"
                                    value={this.state.seat}
                                    onChange={this.onChange}
                                />
                                <div>{this.state.numofseaterror}</div>

                                <TextFieldGroup
                                    placeholder="projecter"
                                    type="number"
                                    name="projecter"
                                    value={this.state.projecter}
                                    onChange={this.onChange}
                                />
                                 <div>{this.state.numofprojectererror}</div>

                                <TextFieldGroup
                                    placeholder="whiteboard"
                                    type="number"
                                    name="whiteboard"
                                    value={this.state.whiteboard}
                                    onChange={this.onChange}
                                />
                                 <div>{this.state.numofwhiteboarderror}</div>

                                <TextFieldGroup
                                    placeholder="other"
                                    name="other"
                                    value={this.state.other}
                                    onChange={this.onChange}
                                />
                                 <div>{this.state.numofothererror}</div>

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

CreateHallreg.propTypes = {
    hallreg: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    hallreg: state.hallreg,
    errors: state.errors

});

export default connect(mapStateToProps, { createHallreg })(
    withRouter(CreateHallreg)
);
