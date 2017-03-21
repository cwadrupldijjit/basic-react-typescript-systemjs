System.config({
    paths: {
        'npm:': 'node_modules/'
    },
    map: {
        'app': 'App',
        
        'react': 'npm:react',
        'react-dom': 'npm:react-dom',
        'object-assign': 'npm:object-assign',
        'fbjs': 'npm:fbjs',
        'process': 'npm:process'
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
        }
    }
});