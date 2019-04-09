import React, { Component } from "react";
import moment from 'moment'

class Lecturer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
          <table className="table--booking">
    <thead>
      <tr className="table__row table__row--header">
        <th colSpan="2" className="table__cell--header table__cell--level header__heading header__heading--column">{moment().format('MMMM Do YYYY')}</th>
      </tr>
      <tr scope="col" className="table__row table__row--subheader">
        <th className="table__cell--header">Time</th>
        <th className="table__cell--header">Bookings</th>
      </tr>
    </thead>
    <tbody className="table__body--booking">
      <tr className="table__row--full">
        <th scope="row" >8 am - 10 am</th>
         
      </tr>
      <tr className="table__row--full">
        <th scope="row">10 am - 12 am</th>
         
      </tr>
      <tr className="table__row--full">
        <th scope="row">12 pm - 1 pm</th>
         
      </tr>
      <tr className="table__row--full">
        <th scope="row">1 pm - 3 pm</th>
          
      </tr>
      <tr className="table__row--full">
        <th scope="row">3 pm - 5 pm</th>
         
      </tr>
      <tr className="table__row--full">
        <th scope="row">5 pm - 7 pm</th>
        
      </tr>
     
     
      
     
     
    </tbody>
  </table>

         


          </div>
        </div>
        
      </div>

      
    );
  }
  
}

export default Lecturer;
