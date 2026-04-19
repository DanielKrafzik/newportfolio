import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'portfolio', component: ProjectsComponent },
  { path: 'portfolio/:id', component: ProjectDetailComponent }
];
