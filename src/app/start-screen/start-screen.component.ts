import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-start-screen',
  imports: [NgFor],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
titleUp = 'Frontend';
titleDown = 'DEVELOPER';
letters1 = this.titleUp.split('');
letters2 = this.titleDown.split('');
hover = false;
}
