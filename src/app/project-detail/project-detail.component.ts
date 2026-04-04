import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [NgIf],
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
      description: 'Task manager inspired by the kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      workflow: '',
      duration: '5 weeks',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'firebase']
    },
    {
      id: 'sharkie',
      title: 'Sharkie',
      image: '/img/Sharkie.png',
      description: 'A fun shark-themed game...'
    },
    {
      id: 'pokedex',
      title: 'Pokedex',
      image: '/img/Pokedex.png',
      description: 'A comprehensive database...'
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
