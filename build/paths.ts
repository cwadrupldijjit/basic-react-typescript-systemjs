import { negatePath } from './utilities';

export const publicTsconfigPath = './tsconfig.json';
export const serverTsconfigPath = './server-src/config/server.tsconfig.json';

export const pathToPublicSrc = './src/';
export const pathToServerSrc = './server-src/';

export const grabAllGlob = '**/*';
export const grabFromSrcGlob = pathToPublicSrc + grabAllGlob;
export const grabFromServerGlob = pathToServerSrc + grabAllGlob;

export const tsServerPaths = [grabFromServerGlob + '.ts'];

export const tsPublicPaths = [grabFromSrcGlob + '.ts', grabFromSrcGlob + '.tsx'];
export const scssPaths = [grabFromSrcGlob + '.scss'];
export const pathToRest = [].concat([grabFromSrcGlob], tsPublicPaths.map(negatePath), scssPaths.map(negatePath));

export const pathToPublicDest = './dist/';
export const pathToServerDest = './server/';