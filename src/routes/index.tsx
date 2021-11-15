import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import InitialForm from '../pages/InitialForm';
import ResultForm from '../pages/ResultForm';
import Information from '../pages/Information';
import Details from '../pages/Details';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Mapa from '../pages/Mapa';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={InitialForm} />
    <Route exact path="/result" component={ResultForm} />
    <Route exact path="/information" component={Information} />
    <Route exact path="/mapa" component={Mapa} />
    <Route exact path="/details" component={Details} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
