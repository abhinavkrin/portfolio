import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';

function MainComponent(){
    return (
        <Switch>
            <Route path="/" exact render={()=> <Home/>} />
            <Route path="/contact" exact render={()=><Contact/>}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default withRouter(MainComponent);