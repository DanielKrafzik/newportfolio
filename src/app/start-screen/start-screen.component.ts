import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-start-screen',
  imports: [NgFor, TranslateModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent implements OnInit {
  
  hover = false;

  helloText = '';
  nameText = '';

  titleUp = '';
  titleDown = '';

  letters1: string[] = [];
  letters2: string[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslations();

    // 🔥 wichtig bei Sprachwechsel
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate.get('HOME').subscribe(res => {
      this.helloText = res.HELLO;
      this.nameText = res.NAME;

      this.titleUp = res.TITLE_UP;
      this.titleDown = res.TITLE_DOWN;

      this.letters1 = this.titleUp.split('');
      this.letters2 = this.titleDown.split('');
    });
  }

}
