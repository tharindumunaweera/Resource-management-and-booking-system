import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';

import HallRegister from "./HallRegister/Hallregister";
import Lecturer from "./actors/Lecturer";
import AvailableLoad from "./actors/AvailableLoad";
import Acadamic from "./actors/Acadamic";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />

        <Route exact path="/available" component={AvailableLoad} />
        <Route exact path="/acadamic" component={Acadamic} />
        <Route exact path="/lec" component={Lecturer} />
        <Route exact path="/HallRegister" component={HallRegister} />
          
      </Switch>
    );
  }
}

export default Routes;
