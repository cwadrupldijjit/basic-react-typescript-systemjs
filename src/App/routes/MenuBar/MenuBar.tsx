import * as React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = React.createClass({
    getInitialState() {
        return {};
    },
    
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
            </nav>
        );
    }
});

export { MenuBar };