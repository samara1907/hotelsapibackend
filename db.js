const Pool = require("pg").Pool;

const connectionString ="postgres://niltoxra:SWMNMYRlAHH8E34emq4ZqUrQMfHNbUJL@ruby.db.elephantsql.com:5432/niltoxra"
const pool = new  Pool({
	connectionString,	
});

module.exports = pool;
