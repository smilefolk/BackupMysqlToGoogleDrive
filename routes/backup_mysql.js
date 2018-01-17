var mysqlDump   = require('mysqldump');
var moment      = require('moment-timezone');
var cron        = require('node-cron');
moment.tz('Asia/Bangkok').format();  
// cron.schedule('* * * * * *', function(){
//     console.log('Hello');
// });
console.log('running');
    mysqlDump({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'backup_mysql',
        dest:`./${moment().format('DD-MM-YYYY')}.sql`  // destination file 
    },function(err){
       
});

