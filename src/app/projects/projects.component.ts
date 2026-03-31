import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NgFor, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {  
  projects = [
    {
      id: 'join',
      title: 'Join',
      image: 'assets/img/Join.png',
      description: 'Task manager inspired by the kanban System...'
    },
    {
      id: 'sharkie',
      title: 'Sharkie',
      image: 'assets/img/Sharkie.png',
      description: 'A fun shark-themed game...'
    },
    {
      id: 'pokedex',
      title: 'Pokedex',
      image: 'assets/img/Pokedex.png',
      description: 'A comprehensive database...'
    }
  ];
}
