import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: 'en' | 'de' = 'en';
  currentLangIcon = '/img/toggle_en.png';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
    this.toggleLangIcon(this.currentLang);
  }

  toggleLangIcon(lang: 'en' | 'de'): void {
    this.currentLangIcon = lang === 'en' ? '/img/toggle_en.png' : '/img/toggle_de.png';
  }
}
