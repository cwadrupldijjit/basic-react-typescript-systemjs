import * as fs from 'fs';
import * as express from 'express';
import * as chalk from 'chalk';

import * as config from '../config/config';

function routeFiles(app: express.Application): express.Application {
    app.use(logFileAccess());
    
    app.use('/node_modules', express.static(config.pathToNodeModules, { redirect: false }));
    app.use('/', express.static(config.pathToPublic, {redirect: false}));
    
    app.all('/*', (req, res, next) => {
        res.sendFile('index.html', {root: config.pathToPublic});
    });
    
    return app;
}

function logFileAccess(options = {}) {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(chalk.green.bold(`"${req.method}"`), chalk.magenta(req.originalUrl));
        
        if (req.method == 'GET' || req.baseUrl.match(/\.[a-z]+$/i)) {
            let filePath = config.pathToProjectRoot;
            
            let requestPath = req.originalUrl;
            
            if (requestPath[0] == '/') {
                requestPath = requestPath.slice(1);
            }
            if (requestPath.indexOf('node_modules') != -1 || requestPath.indexOf('bower_components') != -1) {
                filePath += requestPath;
            } else {
                filePath += 'dist/' + requestPath;
            }
            
            if (!fs.existsSync(filePath)) {
                console.log(chalk.bold.red('Error! Could not find file at path', requestPath));
                console.log(chalk.bold.red('Tried to pull from ', filePath), '\n');
                
                // return res.status(404).send('Could not find file at <code>' + requestPath + '</code>');
            }
            console.log(chalk.bold.cyan(filePath + '\n'));
        }
        
        next();
    };
}

export {
    routeFiles
};