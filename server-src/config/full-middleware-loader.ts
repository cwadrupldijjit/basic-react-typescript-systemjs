import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

function loadMiddlewareToApp(app: express.Application): express.Application {
    app.use(helmet());
    app.use(bodyParser.json());
    
    return app;
}

export {
    loadMiddlewareToApp
};