import React from 'react';
import { Route, Switch } from 'react-router-dom';
import homepage from './components/pages/homepage/homepage';
import NAV from './components/Navbar/Navbar';
import Signup from './components/pages/Signup/Signup';
import Signin from './components/pages/signin/signin';
const MainRouter = () => (
    <div>
        <NAV />
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/" component={homepage} />

        </Switch>
    </div>
)
export default MainRouter;