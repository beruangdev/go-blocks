const concurrently = require('concurrently');
const path = require('path');
const { result } = concurrently(
    [
        { command: 'wp-scripts start --webpack-copy-php --webpack-src-dir=src/blocks --output-path=build/blocks --config webpack.config.js', name: 'server', env: { APP_ENV: 'development' } },
        { command: 'pnpm gulp --watch', name: 'gulp', env: { APP_ENV: 'development' } },
    ],
    {
        prefix: 'name',
        // killOthers: ['failure', 'success'],
        restartTries: 3,
        // cwd: path.resolve(__dirname, 'scripts'),
        cwd: path.resolve(),
    }
);
