
module.exports = ({ hallname, date, starttime, endtime, purpose, discription ,name , studentid , phonenumber }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                      <td class="title"  align = "center"><img  src="http://ucsc.cmb.ac.lk/wp-content/uploads/2016/03/UCSC_logo.jpg"
                               style="width:40%; max-width:120px;" ></td>
                         <tr>
                            
                           
                         </tr>
                         <h1 align = "center"><font size="5">UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING</font></h1>
                         <h1 align = "center"><font size="5">Academic and Publication Branch</font></h1>
                         <h1 align = "center"><strong><font size="4">Request For Hall Booking</font></strong></h1>
                         <h1 align = "center"><font size="3">W001/W002/S104/S203/E401(4th Floor)/E205(Mini Auditorium)/E202(IRQUE Hall)</font></h1>
                         <h1 align = "center"><font size="3">Please use single form for single lecture hall booking</font></h1>

                         <td>
                          <strong> Date:</strong> ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                        </td>
                      </table>
                   </td>
                </tr>

                <tr class="item">
                   <td><strong>Hall Name :</strong> ${hallname}</td>
                </tr>
                <tr class="item">
                   <td><strong>Booking Date : </strong>${date}</td>
                </tr>
                <tr class="item">
                   <td><strong>Start Time :</strong> ${starttime}</td>
                </tr>
                <tr class="item">
                  <td><strong>End Time :</strong> ${endtime}</td>
                </tr>
                <tr class="item">
                  <td><strong>Purpose : </strong> ${purpose}</td>
                </tr>
                <tr class="item">
                  <td><strong>Discription :</strong> ${discription}</td>
                </tr>
             </table>
             <br/>
             <hr/>
             <td><font size="3"><strong>Declaration of the Applicant :</strong><font></td>
             <br/>
             <td>I undertake the responsibility of booking and will take care of all assets in the room during the booking.I will not change assets in the hall (technical settings or physical locations) without permission.I agree to pay compensation to UCSC due to the damages.</td>
             <br />
             <br />
             <td><strong>Name Of Applicant :</strong> ${name}</td>
             <br />
             <td><strong>Registration Number :</strong> ${studentid}</td>
             <br />
             <td><strong>Phone Number :</strong> ${phonenumber}</td>
             <br />
             <hr/>
             <td><strong>Approval Of Coordinator :</strong> </td>
             <br/>
             <td><strong>Approval Of Director :</strong> </td>
          </div>
       </body>
    </html>
    `;
};