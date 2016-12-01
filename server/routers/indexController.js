"use strict";
var indexService = require('../services/indexServices.ts');
var indexController = (function () {
    function indexController() {
        this.readIndexPartialData = function () {
            return indexService.getIndexPartialData(req, res, next);
        };
    }
    return indexController;
}());
module.exports = indexController;
//# sourceMappingURL=indexController.js.map