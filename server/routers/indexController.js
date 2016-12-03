// var model1 = require('../models/indexModel.js');
var indexManager = require('../services/indexServices.js');
module.exports = {
    readLandPage: function (req, res, next) {
        indexManager.getLandPage(req, res, next);
    },
    readIndexPartial: function (req, res, next) {
        indexManager.getIndexPartial(req, res, next);
    },
    readIndexPartialData: function (req, res, next) {
        indexManager.getIndexPartialData(req, res, next);
    }
};
//# sourceMappingURL=indexController.js.map