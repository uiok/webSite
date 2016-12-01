"use strict";
var db = require('../models/dbcontext.js');
var sql = require('mssql');
var indexService = (function () {
    function indexService() {
        this.getIndexPartialData = function (req, res, next) {
            sql.connect(db.config(), function () {
                var request = new sql.Request();
                request.query('select * from News', function (err, recordset) {
                    res.setHeader("Content-Type", "application/json");
                    res.send(JSON.stringify(recordset));
                    next();
                });
            });
        };
    }
    return indexService;
}());
module.exports = indexService;
//# sourceMappingURL=indexServices.js.map