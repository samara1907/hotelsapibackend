const Pool = require("pg").Pool;

const pool = new  Pool({
	host: 'localhost',
	user: 'postgres',
	password: '0102326134',
	database: 'hotelsinfo',
	port: '5432'
		
});

module.exports = pool;
