import React, { Component } from "react";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import axios from "axios";
import Chart from './Chart';
import swal from "sweetalert";


     

class Graphgeneration extends Component {

    // constructor(){
  //   super();
  //   this.state = {
  //     chartData:{}
  //   }
  // }

  constructor(props){
    super(props);
    this.sweetalertfunction = this.sweetalertfunction.bind(this);
    
  }

  sweetalertfunction(){
    console.log("button clicks");
    swal("Successfully Added To The Database!" , "You click the button","warning");
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['W001', 'W002', 'S104', 'S203', 'E401', 'E205', 'E202', 'S202'],
        datasets:[
          {
            label:'Population',
            data:[
              12,
              18,
              15,
              10,
              20,
              9,
              8,
              7
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(210, 130 , 200, 0.6)'
            ]
          }
        ]
      }
    });
  }

  
  render() {
   
    return (
      <React.Fragment>
        <MDBRow>
          <div className="col-sm-4 " />
          <div className="col-sm-7 ">
            <MDBCol md="15">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Hall Usage Summery</strong>
                  </h4>
                </MDBView>
                <MDBCardBody>

                        
                     <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>

                     <button onClick={this.sweetalertfunction}><span>My Sweet</span></button>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        </MDBRow>
      </React.Fragment>
    );
  }
}

export default Graphgeneration;
