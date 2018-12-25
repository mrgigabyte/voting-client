import React from 'react';
import { List } from 'immutable';

const pair = List.of('Trainspotting','28 Days Later');

const Augment = (Component) => (props) =>
    (<Component {...props} pair={pair} />)

class App extends React.Component {

    render(){
        return React.Children.map(this.props.children, (child) => {
            if (child.props && child.props.component) {
                // if it has a component props, we assume it is a router child and thus we need to augment it
                return React.cloneElement(child, {
                    component: Augment(child.props.component)
                })
            } else if (child.props && child.props.render) {
                // render is also a possibility - handle it too
                return React.cloneElement(child, {
                    render: Augment(child.props.render)
                })
            } else {
                // pass-through if is not found to be a router child
                return child
            }
        })
    }

}

export default App;
// React.cloneElement(this.props.children,{pair:pair});