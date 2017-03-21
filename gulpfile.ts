import * as gulp from 'gulp';
import * as tsc from 'gulp-typescript';
import * as sass from 'gulp-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import * as watch from 'gulp-watch';
import * as typescript from 'typescript';

import { plugin as logFile } from './build/logFile';
import * as paths from './build/paths';
import * as utilities from './build/utilities';

const publicTsProject = createTscProject(paths.publicTsconfigPath, {typescript});
const serverTsProject = createTscProject(paths.serverTsconfigPath, {typescript});

gulp.task('tsc:public:dev', tscPublicDev);
gulp.task('tsc:server', tscServer);
gulp.task('scss:dev', scssDev);
gulp.task('copy:dev', copyDev);
gulp.task('watch', watcher);
gulp.task('default', ['tsc:public:dev', 'tsc:server', 'scss:dev', 'copy:dev', 'watch']);

function tscPublicDev() {
    return gulp.src(paths.tsPublicPaths)
        .pipe(sourcemaps.init())
            .pipe(publicTsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pathToPublicDest));
}

function tscServer() {
    return gulp.src(paths.tsServerPaths)
        .pipe(sourcemaps.init())
            .pipe(serverTsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pathToServerDest));
}

function scssDev() {
    return gulp.src(paths.scssPaths)
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pathToPublicDest));
}

function copyDev() {
    return gulp.src(paths.pathToRest)
        .pipe(gulp.dest(paths.pathToPublicDest));
}

function tscPublicDevWatch(file) {
    return gulp.src(utilities.getFilePath(file, ''), {base: paths.pathToPublicSrc})
        .pipe(logFile({srcFolder: '/src/'}))
        .pipe(sourcemaps.init())
            .pipe(publicTsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pathToPublicDest));
}

function tscServerWatch(file) {
    return gulp.src(utilities.getFilePath(file, 'server-'), {base: paths.pathToServerSrc})
        .pipe(logFile({srcFolder: '/server-src/'}))
        .pipe(sourcemaps.init())
            .pipe(serverTsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pathToServerDest));
}

function scssDevWatch(file) {
    return gulp.src(utilities.getFilePath(file, ''), {base: paths.pathToPublicSrc})
        .pipe(logFile({srcFolder: '/src/'}))
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pathToPublicDest));
}

function copyDevWatch(file) {
    return gulp.src(utilities.getFilePath(file, ''), {base: paths.pathToPublicSrc})
        .pipe(logFile({srcFolder: '/src/'}))
        .pipe(gulp.dest(paths.pathToPublicDest));
}

function watcher() {
    watch(paths.tsPublicPaths, tscPublicDevWatch);
    
    watch(paths.tsServerPaths, tscServerWatch);
    
    watch(paths.scssPaths, scssDevWatch);
    
    return watch(paths.pathToRest, copyDevWatch);
}



function createTscProject(pathToTsconfig, options) {
    return tsc.createProject(pathToTsconfig, options);
}