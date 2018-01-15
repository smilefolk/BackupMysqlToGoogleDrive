var mysqlDump = require('mysqldump');
var moment = require('moment-timezone');
moment.tz('Asia/Bangkok').format();  
console.log('running');
    mysqlDump({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'backup_mysql',
        dest:`./${moment().format('DD-MM-YYYY')}.sql`  // destination file 
    },function(err){
       
});

