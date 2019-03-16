import React, { Component } from "react";

class Lecturer extends Component {
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
          </div>
        </div>
      </div>
    );
  }
}

export default Lecturer;
