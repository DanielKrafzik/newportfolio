import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-project-detail',
  imports: [NgIf, NgFor, RouterLink, TranslateModule, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  constructor(private route: ActivatedRoute) {}

  projectId: string | null = null;

  
  projects = [
    {
      id: 'join',
      title: 'Join',
      image: '/img/Join.png',

      descriptionKey: 'PROJECT_DETAIL.JOIN.DESCRIPTION',
      workflowKey: 'PROJECT_DETAIL.JOIN.WORKFLOW',
      durationKey: 'PROJECT_DETAIL.JOIN.DURATION',

      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      next: 'sharkie',
      github: 'https://github.com/DanielKrafzik/joinV2',
      live: 'https://join.daniel-krafzik.com'
    },
    {
      id: 'sharkie',
      title: 'Sharkie',
      image: '/img/Sharkie.png',

      descriptionKey: 'PROJECT_DETAIL.SHARKIE.DESCRIPTION',
      workflowKey: 'PROJECT_DETAIL.SHARKIE.WORKFLOW',
      durationKey: 'PROJECT_DETAIL.SHARKIE.DURATION',

      technologies: ['JavaScript', 'HTML', 'CSS'],
      next: 'pokedex',
      github: 'https://github.com/DanielKrafzik/El-pollo-Loco',
      live: 'https://sharky.daniel-krafzik.com'
    },
    {
      id: 'pokedex',
      title: 'Pokedex',
      image: '/img/Pokedex.png',

      descriptionKey: 'PROJECT_DETAIL.POKEDEX.DESCRIPTION',
      workflowKey: 'PROJECT_DETAIL.POKEDEX.WORKFLOW',
      durationKey: 'PROJECT_DETAIL.POKEDEX.DURATION',

      technologies: ['JavaScript', 'HTML', 'CSS'],
      next: 'join',
      github: 'https://github.com/DanielKrafzik/PokedexV2',
      live: 'https://pokedex.daniel-krafzik.com'
    }
  ];

  currentProject: any;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.currentProject = this.projects.find(p => p.id === id);
    });
  }
}
