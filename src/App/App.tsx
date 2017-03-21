import * as React from 'react';

class App extends React.Component<any, any> {
    public props;
    
    render() {
        return (
            <h1>{this.props.something}</h1>
        );
    }
}

export {
    App
};