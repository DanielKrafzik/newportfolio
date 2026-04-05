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
      workflow: 'Working in a team environment, I gained experience in collaborative development, version control, and clear communication. I contributed to implementing core features, ensuring clean code structure, and maintaining a user-friendly design. This project strengthened my ability to work both independently on assigned tasks and collaboratively within a development team.',
      duration: '5 weeks',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'firebase']
    },
    {
      id: 'sharkie',
      title: 'Sharkie',
      image: '/img/Sharkie.png',
      description: 'A fun shark-themed game where players navigate through the ocean to collect treasures and defeat the endboss.',
      workflow: 'During development, I focused on implementing game logic, handling user input, and creating smooth animations. This project demonstrates my ability to work independently, think logically, and translate ideas into interactive experiences using modern web technologies.',
      duration: '3 weeks',
      technologies: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 'pokedex',
      title: 'Pokedex',
      image: '/img/Pokedex.png',
      description: 'A comprehensive database of all Pokémon species, featuring detailed information, stats, and evolutionary chains.',
      workflow: 'I focused on building reusable components, handling asynchronous data, and ensuring a smooth user experience. This project highlights my ability to work independently, structure complex data, and create clean, maintainable frontend solutions.',
      duration: '2 weeks',
      technologies: ['JavaScript', 'HTML', 'CSS']
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
