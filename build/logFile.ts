const through = require('through2');
// const PluginError = require('gulp-util').PluginError;
import chalk = require('chalk');

const WIN_FOLDER_SEPARATOR = '\\';
const NIX_FOLDER_SEPARATOR = '/';

// const PLUGIN_NAME = 'make-relative-lib-paths-absolute';

function plugin(options?) {
    let root = options && options.root ? options.root : NIX_FOLDER_SEPARATOR;
    let srcFolder = options && options.src ? options.src : NIX_FOLDER_SEPARATOR;
    
    root = convertForwardSlashToBackSlash(root);
    srcFolder = convertForwardSlashToBackSlash(srcFolder);
    
    const stream = through.obj(function(file, enc, cb) {
        if (file.isBuffer()) {
            let historyEntry = file.history[0];
            historyEntry = convertForwardSlashToBackSlash(historyEntry);
            
            let path: string = root + historyEntry.substr(historyEntry.indexOf(srcFolder) + srcFolder.length);
            let lastSlash = path.lastIndexOf(NIX_FOLDER_SEPARATOR);
            let filename = path.substr(lastSlash + 1);
            
            path = path.slice(0, lastSlash + 1);
            
            console.log('Processing file %s at path %s', chalk.green(filename), chalk.cyan(path));
        }
        
        this.push(file);
        
        cb();
    });
    
    return stream;
}

function convertForwardSlashToBackSlash(path: string): string {
    if (path.indexOf(WIN_FOLDER_SEPARATOR) != -1) {
        path = path.replace(new RegExp(WIN_FOLDER_SEPARATOR + WIN_FOLDER_SEPARATOR, 'g'), NIX_FOLDER_SEPARATOR);
    }
    
    return path;
}

export { plugin };