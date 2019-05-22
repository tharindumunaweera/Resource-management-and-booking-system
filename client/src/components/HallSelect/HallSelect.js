import React, { Component } from "react";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import Hallitem from "../halls/Hallitem";
import { getHallregs } from "../../actions/hallregActions";
import moment from 'moment';


import Calender from "../Calender/Calender";
import { weekdays } from "moment";

const style = {
  //this for Calender
  position: "relative",
  margin: "20px auto"
};

class Halls extends Component {
  
//   onDayClick = (e ,day) => {
//     alert("The Day You Select Is : " + day);
//   }

  constructor(props) {
    super(props);
    this.state = {
        // seat1: 50,
        //  seat2: 100,
        //  seat3: 150,
        current1: false,
        current2: false,
        current3: false,
        current4: false,
        current5: false,

    };

    this.onChange = this.onChange.bind(this);

    this.onCheck = this.onCheck.bind(this);
    this.onCheck1 = this.onCheck1.bind(this);
    this.onCheck2 = this.onCheck2.bind(this);
    this.onCheck3 = this.onCheck3.bind(this);
    this.onCheck4 = this.onCheck4.bind(this);
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

onCheck1(e) {

    this.setState({

        current2: !this.state.current2
    });


}

onCheck2(e) {

    this.setState({

        current3: !this.state.current3
    });


}


onCheck3(e) {

  this.setState({

      current4: !this.state.current4
  });


}


onCheck4(e) {

  this.setState({

      current5: !this.state.current5
  });


}


  render(){

    let hallItems0; let hallItems1; let hallItems2;let hallItems3;let hallItems4;
    const { hallregs, loading } = this.props.hallreg;


    // greater than 0 less than 50
    if (this.state.current1 === true) {

        if (this.state.current2 === true) {
            this.setState({

                current2: !this.state.current2
            });

        }

        if (this.state.current3 === true) {
            this.setState({

                current3: !this.state.current3
            });

        }

        if (this.state.current4 === true) {
          this.setState({

              current4: !this.state.current4
          });

      }

      if (this.state.current5 === true) {
        this.setState({

            current5: !this.state.current5
        });

    }


        if (hallregs === null || loading) {
            hallItems0 = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems0 = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} seat1="0" seat2="50"/>
                ));
            } else {
                hallItems0 = <h4>Not Found Halls...</h4>;
            }
        }
    }

    // greater than 50 less than 100
    if (this.state.current2 === true) {

        if (this.state.current1 === true) {
            this.setState({

                current1: !this.state.current1
            });

        }

        if (this.state.current3 === true) {
            this.setState({

                current3: !this.state.current3
            });

        }

        if (this.state.current4 === true) {
          this.setState({

              current4: !this.state.current4
          });

      }

      if (this.state.current5 === true) {
        this.setState({

            current5: !this.state.current5
        });

    }

        if (hallregs === null || loading) {
            hallItems1 = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems1 = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} seat1="50" seat2="100"/>
                ));
            } else {
                hallItems1 = <h4>Not Found Halls...</h4>;
            }
        }
    }

    // greater than 100 less than 150
    if (this.state.current3 === true) {

        if (this.state.current1 === true) {
            this.setState({

                current1: !this.state.current1
            });

        }

        if (this.state.current2 === true) {
            this.setState({

                current2: !this.state.current2
            });

        }

        if (this.state.current4 === true) {
          this.setState({

              current4: !this.state.current4
          });

      }

      if (this.state.current5 === true) {
        this.setState({

            current5: !this.state.current5
        });

    }

        if (hallregs === null || loading) {
            hallItems2 = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems2 = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} seat1="100" seat2="150" />
                ));
            } else {
                hallItems2 = <h4>Not Found Halls...</h4>;
            }
        }
    }

    // greater than 150 less than 200
    if (this.state.current4 === true) {

      if (this.state.current1 === true) {
          this.setState({

              current1: !this.state.current1
          });

      }

      if (this.state.current2 === true) {
          this.setState({

              current2: !this.state.current2
          });

      }

      if (this.state.current3 === true) {
        this.setState({

            current3: !this.state.current3
        });

    }

    if (this.state.current5 === true) {
      this.setState({

          current5: !this.state.current5
      });

  }

      if (hallregs === null || loading) {
          hallItems3 = <Spinner />;
      } else {
          if (hallregs.length > 0) {
              hallItems3 = hallregs.map(hallreg => (
                  <Hallitem key={hallreg._id} hallreg={hallreg} seat1="150" seat2="200" />
              ));
          } else {
              hallItems3 = <h4>Not Found Halls...</h4>;
          }
      }
  }


  // greater than 200
  if (this.state.current5 === true) {

    if (this.state.current1 === true) {
        this.setState({

            current1: !this.state.current1
        });

    }

    if (this.state.current2 === true) {
        this.setState({

            current2: !this.state.current2
        });

    }

    if (this.state.current3 === true) {
      this.setState({

          current3: !this.state.current3
      });

  }

  if (this.state.current4 === true) {
    this.setState({

        current4: !this.state.current4
    });

}
    if (hallregs === null || loading) {
        hallItems4 = <Spinner />;
    } else {
        if (hallregs.length > 0) {
            hallItems4 = hallregs.map(hallreg => (
                <Hallitem key={hallreg._id} hallreg={hallreg} seat1="200" seat2="500" />
            ));
        } else {
            hallItems4 = <h4>Not Found Halls...</h4>;
        }
    }
}


  return (
    <React.Fragment>
     
<MDBRow>
  <div className="col-sm-4" /> 
          <MDBCol md="4">
            <MDBCard className="mt-4">
              <MDBView className="gradient-card-header black darken-2">
              <h4 className="h4-responsive text-white">Available Seats</h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '400px'}} className="text-center">
              {/* <Calender style= {style} width="320px" onDayClick={(e, day)=> this.onDayClick(e,day)}  />          {moment().format('MMMM D YYYY')} */}
              <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">

                    <div className="form-check mb-4" align="left">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current1"
                                    value={this.state.current1}
                                    checked={this.state.current1}
                                    onChange={this.onCheck}
                                    id="current1"
                                />
                                <label htmlFor="current1" className="form-check-label">
                                   <strong> Greater than 0 - Less than 50 </strong>
                                </label>
                            </div>
                      
                   
                    </li>
                    <li className="list-group-item">

                    <div className="form-check mb-4" align="left">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current2"
                                    value={this.state.current2}
                                    checked={this.state.current2}
                                    onChange={this.onCheck1}
                                    id="current2"
                                />
                                <label htmlFor="current2" className="form-check-label">
                                <strong>Greater than 50 - Less than 100</strong>
                                </label>
                            </div>
                    
                     
                    </li>
                    <li className="list-group-item">

                    <div className="form-check mb-4" align="left">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current3"
                                    value={this.state.current3}
                                    checked={this.state.current3}
                                    onChange={this.onCheck2}
                                    id="current3"
                                />
                                <label htmlFor="current3" className="form-check-label">
                                <strong>Greater than 100 - Less than 150</strong>
                                </label>
                            </div>
                      
                   

                    </li>
                    <li className="list-group-item">
                    <div className="form-check mb-4" align="left">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current4"
                                    value={this.state.current4}
                                    checked={this.state.current4}
                                    onChange={this.onCheck3}
                                    id="current4"
                                />
                                <label htmlFor="current4" className="form-check-label">
                                <strong>Greater than 150 - Less than 200</strong>
                                </label>
                            </div>

                    </li>
                    <li className="list-group-item">
                    <div className="form-check mb-4" align="left">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current5"
                                    value={this.state.current5}
                                    checked={this.state.current5}
                                    onChange={this.onCheck4}
                                    id="current5"
                                />
                                <label htmlFor="current5" className="form-check-label">
                                   <strong> Greater 200</strong>
                                </label>
                            </div>
                   

                    </li>
                   
                  </ul>
                  <br />
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
           
              <MDBCardBody style={{width: '100%', height: '350px'}} className="text-center">
              <div className="col-sm-30 style" align="left">
                            {hallItems0}
                            {hallItems1}
                            {hallItems2}
                            {hallItems3}
                            {hallItems4}

                     </div>
               
              </MDBCardBody>
           
          </MDBCol>
        </MDBRow>


        <MDBRow>
          <div className="col-sm-4" /> 
            <MDBCol md="4">
            
                </MDBCol>

                <MDBCol md="5">
            
            </MDBCol>
        </MDBRow>
        
        </React.Fragment>
  );
};
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