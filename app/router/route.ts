import { Routes, RouterModule } from '@angular/router';
import { IndexComponent }     from '../../app/controllers/index';
import { NewsComponent }   from '../../app/controllers/news';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
