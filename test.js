var nconf = require('nconf');

nconf.file({ file: './testnconf.json' });

nconf.set('rodou', 'lala');
nconf.save();