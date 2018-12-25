import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Voting extends React.PureComponent {
    constructor(props) {
        super(props);
        this.getPair = this.getPair.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }

    getPair() {
        return this.props.pair || [];
    };
    render() {
        return <div className="voting">
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />}
        </div>;
    };
}


export default Voting;