import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

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

  checkBox() {
    if(this.boxPath === '/img/checkmark_empty.png') {
      this.boxPath = '/img/checkmark_checked.png';
      this.boxPathHover = '/img/checkmark_checked_hover.png';
      this.boxChecked = true;
      document.getElementById('privacy-policy-error')!.style.display = 'none';    
    } else {
      this.boxPath = '/img/checkmark_empty.png';
      this.boxPathHover = '/img/checkmark_empty_hover.png';
      this.boxChecked = false;
      document.getElementById('privacy-policy-error')!.style.display = 'block';
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

  onNameChange(value: string) {
    this.contactData.name = value.replace(/^\s+/, '');
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
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
