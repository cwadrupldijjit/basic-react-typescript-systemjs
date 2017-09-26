System.config({
    paths: {
        'npm:': 'node_modules/'
    },
    map: {
        'app': 'App',
        
        'react': 'npm:react',
        'react-dom': 'npm:react-dom',
        'react-router': 'npm:react-router',
        'react-router-dom': 'npm:react-router-dom',
        'object-assign': 'npm:object-assign',
        'fbjs': 'npm:fbjs',
        'process': 'npm:process',
        'history': 'npm:history',
        'warning': 'npm:warning',
        'invariant': 'npm:invariant',
        'path-to-regexp': 'npm:path-to-regexp',
        'resolve-pathname': 'npm:resolve-pathname',
        'value-equal': 'npm:value-equal',
    },
    packages: {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        },
        'react': {
            main: './react.js',
            defaultExtension: 'js'
        },
        'react-dom': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'react-router': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'react-router-dom': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'object-assign': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'fbjs': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'process': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'history': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'warning': {
            main: './warning.js',
            defaultExtension: 'js'
        },
        'invariant': {
            main: './invariant.js',
            defaultExtension: 'js'
        },
        'path-to-regexp': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'resolve-pathname': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'value-equal': {
            main: './index.js',
            defaultExtension: 'js'
        }
    }
});