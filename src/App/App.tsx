import * as React from 'react';
import { Routes } from './routes/Routes';

class App extends React.Component<any, any> {
    public props;
    
    render() {
        return (
            <div>
                <h1>{this.props.something}</h1>
                <Routes />
            </div>
        );
    }
}

export {
    App
};