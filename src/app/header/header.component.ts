import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: 'EN' | 'DE' = 'EN';
  currentLangIcon = '/img/toggle_en.png';

  constructor(private translate: TranslateService) {
  this.translate.setDefaultLang('en');
}

switchLang(lang: string) {
  this.translate.use(lang);
}
}
