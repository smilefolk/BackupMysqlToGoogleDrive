var cmd     = require('node-command-line'),
    Promise = require('bluebird');
function runSingleCommandWithoutWait() {
    cmd.run('mongodump --out /jenkins_folk/BackupMysqlToGoogleDrive/mongodb');
    console.log('Executed your command :)');
  }
runSingleCommandWithoutWait()