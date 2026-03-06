import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skillset',
  imports: [NgFor],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  skills = [
    { name: 'HTML', icon: '/img/skill1.png' },
    { name: 'CSS', icon: '/img/skill2.png' },
    { name: 'JavaScript', icon: '/img/skill3.png' },
    { name: 'TypeScript', icon: '/img/skill4.png' },
    { name: 'Angular', icon: '/img/skill5.png' },
    { name: 'Firebase', icon: '/img/skill6.png' },
    { name: 'Git', icon: '/img/skill7.png' },
    { name: 'REST-API', icon: '/img/skill8.png' },
    { name: 'Scrum', icon: '/img/skill9.png' },
    { name: 'Material Design', icon: '/img/skill10.png' }
  ];
}
