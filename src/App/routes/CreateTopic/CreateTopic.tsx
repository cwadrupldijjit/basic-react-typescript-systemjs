import * as React from 'react';

const CreateTopic = React.createClass({
    getInitialState() {
        return {pageTitle: 'Create Topic'};
    },
    
    render() {
        return (<h2>{this.state.pageTitle}</h2>);
    }
});

export { CreateTopic };