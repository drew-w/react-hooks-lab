import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./Components/List";
import Character from "./Components/Character";


export default (
    <Switch>
        <Route exact path='/' component={List}/>
        <Route path='/characters/:name' component={Character} />
    </Switch>
)