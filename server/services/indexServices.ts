import db = require('../models/dbcontext.js');
import sql = require('mssql');
import path = require('path');


class indexService {

	public getIndexPartialData = (req:any, res:any,next:any) => {
		sql.connect(db.config(),function(){
			var request = new sql.Request();
				request.query('select * from News', function(err, recordset) {
				res.setHeader("Content-Type", "application/json");
				res.send(JSON.stringify(recordset));
				next();
	    	});
		})
    }

	
}

export = indexService