"use strict";
var router_1 = require('@angular/router');
var index_1 = require('../../app/controllers/index');
var news_1 = require('../../app/controllers/news');
var person_1 = require('../../app/controllers/person');
var person_Record_1 = require('../../app/controllers/person_Record');
var appRoutes = [
    {
        path: '',
        component: index_1.IndexComponent
    },
    {
        path: 'news',
        component: news_1.NewsComponent
    },
    {
        path: 'person',
        component: person_1.PersonComponent, RecordComponent: person_Record_1.RecordComponent
    },
    {
        path: 'person/record',
        component: person_1.PersonComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=route.js.map