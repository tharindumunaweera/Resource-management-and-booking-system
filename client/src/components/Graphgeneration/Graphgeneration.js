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
    swal("Successfully Added To The Database!" , "You click the button","success");
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
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
