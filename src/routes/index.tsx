import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Project from '../pages/Project';
import Certificates from '../pages/Certificates';
import Certificate from '../pages/Certificate';
import Page404 from '../pages/Page404';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects/:project" component={Project} />
        <Route path="/certificates" exact component={Certificates} />
        <Route path="/certificates/:certificate" component={Certificate} />
        <Route path='/' component={Page404} />
    </Switch>
);

export default Routes;