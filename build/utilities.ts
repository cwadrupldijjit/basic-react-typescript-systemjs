const WIN_FOLDER_SEPARATOR = '\\';
const NIX_FOLDER_SEPARATOR = '/';

function negatePath(path: string): string {
    return '!' + path;
}

function getFilePath(file, root = NIX_FOLDER_SEPARATOR, srcFolder = 'src/') {
    let historyEntry = file.history[0];
    historyEntry = convertForwardSlashToBackSlash(historyEntry);
    console.log(historyEntry);
    
    let path = root + historyEntry.substr(historyEntry.indexOf(srcFolder));
    let lastSlash = path.lastIndexOf(NIX_FOLDER_SEPARATOR);
    let filename = path.substr(lastSlash + 1);
    path = path.slice(0, lastSlash + 1);
    console.log(path, filename, lastSlash);
    
    return './' + path + filename;
}

function convertForwardSlashToBackSlash(path: string): string {
    if (path.indexOf(WIN_FOLDER_SEPARATOR) != -1) {
        let regExForWindowsSeparator = new RegExp(WIN_FOLDER_SEPARATOR + WIN_FOLDER_SEPARATOR, 'g');
        path = path.replace(regExForWindowsSeparator, NIX_FOLDER_SEPARATOR);
    }
    
    return path;
}

export {
    WIN_FOLDER_SEPARATOR,
    NIX_FOLDER_SEPARATOR,
    negatePath,
    getFilePath,
    convertForwardSlashToBackSlash
};