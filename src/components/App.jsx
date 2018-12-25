import React from 'react';
import { List } from 'immutable';

const pair = List.of('Trainspotting','28 Days Later');

class App extends React.Component {

    render(){
        return this.props.children
    }

}

export default App;
// React.cloneElement(this.props.children,{pair:pair});