const pjson = require('../package.json');
const program = require('commander');

program
  .version(pjson.version)
  .command('get', 'Get the default interchain network for this chain')
  .command('set', 'Set the default interchain network for this chain')
  .parse(process.argv);
