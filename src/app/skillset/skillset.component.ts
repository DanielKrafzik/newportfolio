import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skillset',
  imports: [NgFor, TranslateModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  hoverIndex: number | null = null;
  skills = [
    { name: 'HTML', icon: '/img/skill1.png', icon2: '/img/skill1_2.png' },
    { name: 'CSS', icon: '/img/skill2.png', icon2: '/img/skill2_2.png' },
    { name: 'JavaScript', icon: '/img/skill3.png', icon2: '/img/skill3_2.png' },
    { name: 'TypeScript', icon: '/img/skill4.png', icon2: '/img/skill4_2.png' },
    { name: 'Angular', icon: '/img/skill5.png', icon2: '/img/skill5_2.png' },
    { name: 'Firebase', icon: '/img/skill6.png', icon2: '/img/skill6_2.png' },
    { name: 'Git', icon: '/img/skill7.png', icon2: '/img/skill7_2.png' },
    { name: 'REST-API', icon: '/img/skill8.png', icon2: '/img/skill8_2.png' },
    { name: 'Scrum', icon: '/img/skill9.png', icon2: '/img/skill9_2.png' },
    { name: 'Material Design', icon: '/img/skill10.png', icon2: '/img/skill10.png' }
  ];
  
  currentPeel = '/img/peel1.png';

  onPeelClick() {
    if (this.currentPeel.includes('peel3')) {
      this.currentPeel = '/img/peel1.png';
      return;
    }

    if (this.currentPeel.includes('peel1')) {
      this.currentPeel = '/img/peel2.png';

      setTimeout(() => {
        this.currentPeel = '/img/peel3.png';
      }, 200);
    }
  }
}
