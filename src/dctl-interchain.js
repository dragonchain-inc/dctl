const pjson = require('../package.json');
const program = require('commander');

program
  .version(pjson.version)
  .command('bitcoin', 'Bitcoin interchain operations')
  .command('ethereum', 'Ethereum interchain operations')
  .command('rm', 'Remove a configured interchain')
  .command('ls', 'List interchain networks')
  .command('get', 'Get a specific interchain network')
  .command('default', 'Operations for getting/setting default interchains (l5 only)')
  .parse(process.argv);
