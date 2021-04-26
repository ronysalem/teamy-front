import React from 'react';
import { Route, Switch } from 'react-router-dom';
import homepage from './components/pages/homepage/homepage';
import Signup from './components/pages/Signup/Signup';
const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={homepage} />

        </Switch>
    </div>
)
export default MainRouter;