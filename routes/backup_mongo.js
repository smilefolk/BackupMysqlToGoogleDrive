var cmd     = require('node-command-line'),
    Promise = require('bluebird');
function runSingleCommandWithoutWait() {
    cmd.run('mongodump --username mmt --password "maxworldchampion2016" --out /jenkins_folk/BackupMysqlToGoogleDrive/mongodb');
    console.log('Executed your command :)');
  }
runSingleCommandWithoutWait()