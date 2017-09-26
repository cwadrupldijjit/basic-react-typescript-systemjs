import * as React from 'react';

const HomeComponent = React.createClass({
    getInitialState() {
        return {
            pageTitle: 'Welcome to the Topic Hub!'
        }
    },
    
    render() {
        return (<h2>{this.state.pageTitle}</h2>);
    }
});

export { HomeComponent };