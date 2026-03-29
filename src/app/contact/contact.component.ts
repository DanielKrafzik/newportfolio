import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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
}
