import * as React from 'react';

const TopicList = React.createClass({
    getInitialState() {
        return {
            pageTitle: 'Topic List'
        };
    },
    
    render() {
        return (<h2>{this.state.pageTitle}</h2>);
    }
});

export { TopicList };