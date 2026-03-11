import { Component } from '@angular/core';
import { StartScreenComponent } from '../start-screen/start-screen.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ColleaguesComponent } from '../colleagues/colleagues.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    StartScreenComponent,
    AboutMeComponent,
    SkillsetComponent,
    ProjectsComponent,
    ColleaguesComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
