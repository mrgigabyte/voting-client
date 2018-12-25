import React from 'react';
import {List} from 'immutable';
import {Voting} from './Voting';


const pair = List.of('Trainspotting','28 Days Later');

class App extends React.Component{
    render(){
      
            return React.cloneElement(this.props.children,{pair:pair});  
         
    }
}






export default App;



// React.cloneElement(this.props.children,{pair:pair});