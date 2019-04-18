import React from "react";
import { Link } from "react-router-dom";

const TimetableActions = () => {
  return (
    <div>
      <div className="row">
        <div className="btn-group mb-4" role="group">
          <div class="col-md-4">
            <Link to="/mundashboard" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 08.00 a.m
            </Link>

            <Link to="/ninedashboard" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 09.00 a.m
            </Link>

            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 10.00 a.m
            </Link>

            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 11.00 a.m
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 12.00 p.m
            </Link>
            <div style={{ marginLeft: "20px" }} />
            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 01.00 p.m
            </Link>

            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 02.00 p.m
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 03.00 p.m
            </Link>

            <Link to="/time-table" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 04.00 p.m
            </Link>

            <Link to="/mundashboard" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              Begining from 05.00 p.m
            </Link>

            <Link to="/thadashboard" className="btn btn-light">
              <i className="fas fa-table text-info mr-2" />
              THA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableActions;
