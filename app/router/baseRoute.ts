import { Routes, RouterModule }  from '@angular/router';
import { BackendRoute }  from './backendRoute';
import { IndexComponent }  from '../../app/controllers/index';
import { Guard }  from '../../app/service/GuardService';



const appRoutes: Routes = [
  { path: '', component: IndexComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: BackendRoute }
];
// 範例
 // { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
 //  { path: '', component: SecureComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: BackendRoute }
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
