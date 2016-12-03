var db = require('../models/dbcontext.js');
// var cookie = require('../helpers/cookieTool.js');
var sql = require('mssql');
var path = require('path');
//取頁面
var _getLandPage = function (req, res, next) {
    //此句不要刪請看node心得.txt
    //console.log(req.query.id );
    res.setHeader("Content-Type", "text/html");
    // res.render("home/index");
    res.sendFile(path.join(__dirname, '/app/views/index.html'));
    next();
};
var _getIndexPartial = function (req, res, next) {
    res.setHeader("Content-Type", "text/html");
    res.render("share/newsPartial2");
    next();
};
var _getIndexPartialData = function (req, res, next) {
    sql.connect(db.config(), function () {
        var request = new sql.Request();
        request.query('select * from News', function (err, recordset) {
            res.setHeader("Content-Type", "application/json");
            res.send(JSON.stringify(recordset));
            next();
        });
    });
};
//取頁面對應值
var _getAll = function (req, res, next) {
    // var ggg = cookie.parse(req.headers.cookie)
    // console.log(ggg)
    sql.connect(db.config(), function () {
        var request = new sql.Request();
        request.query('select * from News', function (err, recordset) {
            // console.log(JSON.stringify(recordset));
            var data = { title: "Jade Demo", username: "Michael", gcd: JSON.stringify(recordset) };
            res.setHeader("Content-Type", "text/html");
            res.render("home/index", data);
            next();
        });
    });
};
var _getNewPartial = function (req, res, next) {
    sql.connect(db.config(), function () {
        var request = new sql.Request();
        request.query('select * from News', function (err, recordset) {
            // console.log(JSON.stringify(recordset));
            var data = { title: "Jade Demo", username: "Michael", gcd: JSON.stringify(recordset) };
            res.setHeader("Content-Type", "text/html");
            res.render("share/newsPartial", data);
            next();
        });
    });
};
module.exports = {
    getAll: _getAll,
    getLandPage: _getLandPage,
    getNewPartial: _getNewPartial,
    getIndexPartial: _getIndexPartial,
    getIndexPartialData: _getIndexPartialData
};
//# sourceMappingURL=indexServices.js.map