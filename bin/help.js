
const colors = require('ansi-colors');
/**
 * Manually output http-server help from:
 * @see https://github.com/http-party/http-server/blob/master/bin/http-server
 * 
 * This is because it's confusing to the user seeing
 * the "usage" which indicates calling "http-server [path] [options]"
 * 
 * This was easier than setting up a Transform Stream and filtering it ;)
 */

const httpServerHelp = [
  // 'usage: http-server [path] [options]',
  // '',
  colors.blueBright('options (http-server):'),
  '  -p --port          Port to use [5000]',
  '  -a                 Address to use [0.0.0.0]',
  '  -d                 Show directory listings [true]',
  '  -i                 Display autoIndex [true]',
  '  -g --gzip          Serve gzip files when possible [false]',
  '  -b --brotli        Serve brotli files when possible [false]',
  '                     If both brotli and gzip are enabled, brotli takes precedence\n',
  '  -e --ext           Default file extension if none supplied [none]',
  '  -s --silent        Suppress log messages from output',
  '  --cors[=headers]   Enable CORS via the "Access-Control-Allow-Origin" header',
  '                     Optionally provide CORS headers list separated by commas\n',
  '  -o [path]          Open browser window after starting the server.',
  '                     Optionally provide a URL path to open the browser window to\n',
  '  -c                 Cache time (max-age) in seconds [3600], e.g. -c10 for 10 seconds.',
  '                     To disable caching, use -c-1.\n',
  '  -t                 Connections timeout in seconds [120], e.g. -t60 for 1 minute.',
  '                     To disable timeout, use -t0\n',
  '  -U --utc           Use UTC time format in log messages.',
  '  --log-ip           Enable logging of the client\'s IP address',
  '',
  '  -P --proxy         Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com',
  '',
  '  --username         Username for basic authentication [none]',
  '                     Can also be specified with the env variable NODE_HTTP_SERVER_USERNAME\n',
  '  --password         Password for basic authentication [none]',
  '                     Can also be specified with the env variable NODE_HTTP_SERVER_PASSWORD',
  '',
  '  -S --ssl           Enable https.',
  '  -C --cert          Path to ssl cert file (default: cert.pem).',
  '  -K --key           Path to ssl key file (default: key.pem).',
  '',
  '  -r --robots        Respond to /robots.txt [User-agent: *\\nDisallow: /]',
  '  --no-dotfiles      Do not show dotfiles',
  '  -h --help          Print this list and exit.',
  '  -v --version       Print the version and exit.'
].join('\n');

module.exports = {
  httpServerHelp
};