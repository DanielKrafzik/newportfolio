import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'portfolio', component: ProjectsComponent },
  { path: 'portfolio/:id', component: ProjectDetailComponent }
];
