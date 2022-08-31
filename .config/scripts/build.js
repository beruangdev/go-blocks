const concurrently = require('concurrently')
const path = require('path')
const { result } = concurrently(
  [
    {
      command:
        'wp-scripts build --webpack-copy-php --webpack-src-dir=src/blocks --output-path=build/blocks',
      name: 'script',
      env: { APP_ENV: 'production' },
    },
    {
      command: 'pnpm gulp build',
      name: 'style',
      env: { APP_ENV: 'production' },
    },
  ],
  {
    prefix: 'build',
    // killOthers: ['failure', 'success'],
    restartTries: 3,
    // cwd: path.resolve(__dirname, 'scripts'),
    cwd: path.resolve(),
  },
)
