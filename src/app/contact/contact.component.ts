import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, FormsModule, TranslateModule, RouterLink, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  isHover: boolean = false;
  boxPath: string = '/img/checkmark_empty.png';
  boxPathHover: string = '/img/checkmark_empty_hover.png';
  boxChecked: boolean = false;
  successMessageVisible = false;

  checkBox() {
    if(this.boxPath === '/img/checkmark_empty.png') {
      this.boxPath = '/img/checkmark_checked.png';
      this.boxPathHover = '/img/checkmark_checked_hover.png';
      this.boxChecked = true;
      document.getElementById('privacy-policy-error')!.style.opacity = '0';    
    } else {
      this.boxPath = '/img/checkmark_empty.png';
      this.boxPathHover = '/img/checkmark_empty_hover.png';
      this.boxChecked = false;
      document.getElementById('privacy-policy-error')!.style.opacity = '1';
      document.getElementById('privacy-policy-error')!.style.visibility = 'visible';
    }
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  mailTest = false;

  post = {
    endPoint: 'https://danielkrafzik.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onNameChange(value: string | null | undefined) {
    this.contactData.name = (value ?? '').replace(/^\s+/, '');
    this.contactData.name = this.contactData.name.trim();
  }

  onMailChange(value: string | null | undefined) {
    this.contactData.email = (value ?? '').replace(/^\s+/, '');
    this.contactData.email = this.contactData.email.trim();
  }

  onMessageChange(value: string | null | undefined) {
  let v = value ?? '';

  // führende Leerzeichen entfernen
  v = v.replace(/^\s+/, '');

  // 🔥 mehrere Leerzeichen zu einem reduzieren
  v = v.replace(/ {2,}/g, ' ');

  // optional: Tabs + Zeilenumbrüche auch sauber machen
  v = v.replace(/\t+/g, ' ');

  // final trim (falls doch noch was am Ende hängt)
  v = v.replace(/\s+/g, ' ').trim();

  this.contactData.message = v;
}

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && this.boxChecked) {

    const templateParams = {
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      message: this.contactData.message
    };

    emailjs.send(
      'service_3ydo17x',
      'template_pvxpsqp',
      templateParams,
      'CtZo7Q6kse3UhLHdQ'
    ).then(() => {

      this.boxPath = '/img/checkmark_empty.png';
      this.boxPathHover = '/img/checkmark_empty_hover.png';
      this.boxChecked = false;
      ngForm.resetForm();

      this.successMessageVisible = true;

      setTimeout(() => {
        this.successMessageVisible = false;
      }, 3000);

    }).catch((error) => {
      console.error('FAILED...', error);
    });
  }
}

  placeholders = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    message: '',
    messageError: ''
  };

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate.get('CONTACT').subscribe(res => {
      this.placeholders.name = res.NAME_PLACEHOLDER;
      this.placeholders.nameError = res.NAME_ERROR;

      this.placeholders.email = res.EMAIL_PLACEHOLDER;
      this.placeholders.emailError = res.EMAIL_ERROR;

      this.placeholders.message = res.MESSAGE_PLACEHOLDER;
      this.placeholders.messageError = res.MESSAGE_ERROR;
    });
  }
}
