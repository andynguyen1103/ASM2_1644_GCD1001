const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'harseggtektufs',
        password:'652952652f0a4b73ff536d5ee0711e9f92b7f57353904f75a130d95b4faac223',
        host:'ec2-44-195-100-240.compute-1.amazonaws.com',
        database:'d4bs0p4r9f27gm',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;