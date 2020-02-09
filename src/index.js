// eslint-disable-next-line
require('@babel/register')({
  extensions: ['.js', '.ts']
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('./server/bin/index');
