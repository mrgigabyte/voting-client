import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import App from './components/App';
import {  Route, HashRouter, Switch } from 'react-router-dom';

// const pair = ['Trainspotting', '28 Days Later'];

const routes = (
    <App>
        <Route path='/' component={Voting} />
    </App>
)
               

// ReactDOM.render(
//     <Voting pair={pair} hasVoted="Trainspotting" winner="Trainspotting" />,
//     document.getElementById('app')
// );


ReactDOM.render(
    <HashRouter>{routes}</HashRouter>,
    document.getElementById('app')
);