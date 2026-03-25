import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

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
    } else {
      this.boxPath = '/img/checkmark_empty.png';
      this.boxPathHover = '/img/checkmark_empty_hover.png';
      this.boxChecked = false;
    }
  }

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if(this.boxChecked) {
      console.log(this.contactData);
      // Here you can add your form submission logic, e.g., sending the data to a server
    } else {
      alert('Please agree to the terms and conditions before submitting the form.');
    }
  }
}
