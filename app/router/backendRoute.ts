import { Routes, RouterModule }		from '@angular/router';
import { IndexComponent }			from '../../app/controllers/index';
import { NewsComponent }			from '../../app/controllers/news';
import { PersonComponent }			from '../../app/controllers/person';
import { DocumentComponent }      from '../../app/controllers/document';



export const BackendRoute: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'news', component: IndexComponent },
    { path: 'person', component: NewsComponent },
    { path: 'document', component: DocumentComponent }
];