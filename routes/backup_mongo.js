var cmd     = require('node-command-line'),
    Promise = require('bluebird');
function runSingleCommandWithoutWait() {
    cmd.run('mongodump --out /jenkins_folk/BackupMysqlToGoogleDrive/mongodb --username mmt --password "maxworldchampion2016"');
    console.log('Executed your command :)');
  }
runSingleCommandWithoutWait()