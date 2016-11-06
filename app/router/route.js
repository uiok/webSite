"use strict";
var router_1 = require('@angular/router');
var index_1 = require('../../app/controllers/index');
var news_1 = require('../../app/controllers/news');
var appRoutes = [
    {
        path: '',
        component: index_1.IndexComponent
    },
    {
        path: 'news',
        component: news_1.NewsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=route.js.map