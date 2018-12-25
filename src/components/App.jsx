import React from 'react';
import { List } from 'immutable';

const pair = List.of('Trainspotting','28 Days Later');

const Augment = (Component) => (props) =>
    (<Component {...props} pair={pair} />)

class App extends React.Component {

    render(){
        let children = []
        React.Children.forEach(this.props.children, (child) => {
            children.push(React.cloneElement(child, {
                component: Augment(child.props.component)
            }))
        })
        return children
    }

}

export default App;
// React.cloneElement(this.props.children,{pair:pair});