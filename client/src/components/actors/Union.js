import React, { Component } from "react";

import Lecturehalls from "../other/Lecturehalls";

class Union extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-center text-info">Resources</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={true} />
                    <h4> Projectors</h4>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="radio">
                  <label>
                    <input type="radio" value="option2" />
                    <h4>A/C Rooms</h4>
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option3" />
                    <h4> Non A/C Rooms</h4>
                  </label>
                </div>
              </li>
              <li className="list-group-item" />
            </ul>
            <h3 className="text-center text-info">Available Seats</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="radio">
                  <label>
                    <input type="radio" value="option4" />
                    <h6>less 100</h6>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="radio">
                  <label>
                    <input type="radio" value="option5" />
                    <h6>less 200</h6>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="radio">
                  <label>
                    <input type="radio" value="option5" />
                    <h6>less 300</h6>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="radio">
                  <label>
                    <input type="radio" value="option5" />
                    <h6>less 400</h6>
                  </label>
                </div>
              </li>
            </ul>
            <br />
            <input
              type="button"
              className="btn btn-block btn-primary "
              value="button"
              onClick={this._onButtonClick}
            />
          </div>
          {this.state.showComponent ? <Lecturehalls /> : null}
        </div>
      </div>
    );
  }
}

export default Union;
