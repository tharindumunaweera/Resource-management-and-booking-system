import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Union from "./components/actors/Union";
import Lecturer from "./components/actors/Lecturer";
import Calender from "./components/Calender/Calender";

import "./App.css";

const style = {
  //this for Calender
  position: "relative",
  margin: "50px auto"
};

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/union" component={Union} />
              <Route exact path="/Lecturer" component={Lecturer} />
            </div>
            <Calender
              style={style}
              width="302px"
              onDayClick={(e, day) => this.onDayClick(e, day)}
            />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
