import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-start-screen',
  imports: [NgFor, TranslateModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
titleUp = 'Frontend';
titleDown = 'DEVELOPER';
letters1 = this.titleUp.split('');
letters2 = this.titleDown.split('');
hover = false;

constructor(private translate: TranslateService) {
  this.translate.setDefaultLang('en');
}

switchLang(lang: string) {
  this.translate.use(lang);
}
}
