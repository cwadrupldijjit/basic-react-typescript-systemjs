// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

const title = 'Example React App';

ReactDOM.render(
    (<App something={title} />),
    document.getElementById('mount')
);