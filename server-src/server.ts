import * as express from 'express';
import * as chalk from 'chalk';

import * as config from './config/config';

import { loadMiddlewareToApp } from './config/full-middleware-loader';
import { routeFiles } from './routes/files.route';
import { ApiRouter } from './routes/api.route';

const app = express();

loadMiddlewareToApp(app);

app.use('/api/', ApiRouter);

routeFiles(app);

app.listen(config.port, () => {
    console.log('Server running and connected to',
                chalk.blue('http://localhost') + ':' + chalk.yellow(config.port + ''));
});