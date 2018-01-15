var cmd     = require('node-command-line'),
    Promise = require('bluebird');
function runSingleCommandWithoutWait() {
    cmd.run('mongodump --host beta.maxmuaythai.com --port 27017 --username mmt --password "maxworldchampion2016" --db max_api_phase2 --out /jenkins_folk/BackupMysqlToGoogleDrive/mongodb');
    console.log('Executed your command :)');
  }
runSingleCommandWithoutWait()