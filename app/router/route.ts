import { Routes, RouterModule }		from '@angular/router';
import { IndexComponent }			from '../../app/controllers/index';
import { NewsComponent }			from '../../app/controllers/news';
import { PersonComponent }			from '../../app/controllers/person';
import { BasicComponent }			from '../../app/controllers/person_Basic';
import { CertificateComponent }		from '../../app/controllers/person_Certificate';
import { RecordComponent }			from '../../app/controllers/person_Record';
import { TestRecordComponent }		from '../../app/controllers/person_TestRecord';
import { Tabs }          from '../../app/controllers/tabSet';
import { Tab }          from '../../app/controllers/tab';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'person',
    component: PersonComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
