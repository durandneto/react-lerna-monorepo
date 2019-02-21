var exec = require('child_process').exec;
var child = exec('npm run bootstrap');

child.stderr.on('data', function(data) {
    console.log('[log]: ' + data);
    //Here is where the error output goes
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});