module.exports = {
    apps: [
        {
            name: 'CMIP-calculation-debug',
            script: 'app.js',
            args: '--nolazy --inspect=0.0.0.0:24688',
            node_args: '--nolazy --inspect=0.0.0.0:24688',
            instances: 1,
            autorestart: true,
            watch: true,
            'restart-delay': 10,
            ignore_watch: [
                "node_modules",
                ".vscode",
                "public",
                "bin",
                "package-lock.json",
                "package.json",
                "resources",
                "resources/geo-models",
                "resources/geo-data",
                "nodemon.json",
                "config/setting.js",
                "npm-debug.log",
                "logs",
            ],
            max_memory_restart: '2G',
            output: 'logs/log.log',
            error: 'logs/error.err',
            log_date_format: 'YYYY-MM-DD HH:mm',
            merge_logs: true,
        },
        {
            name: 'CMIP-calculation-release',
            script: 'app.js',
            args: '--nolazy',
            node_args: '--nolazy',
            instances: 4,
            autorestart: true,
            watch: true,
            ignore_watch: [
                "node_modules",
                ".vscode",
                "public",
                "bin",
                "package-lock.json",
                "package.json",
                "resources",
                "resources/geo-models",
                "resources/geo-data",
                "nodemon.json",
                "config/setting.js",
                "npm-debug.log",
                "logs",
            ],
            max_memory_restart: '2G',
            output: 'logs/log.log',
            error: 'logs/error.err',
            log_date_format: 'YYYY-MM-DD HH:mm',
            merge_logs: true,
        }
    ]
};