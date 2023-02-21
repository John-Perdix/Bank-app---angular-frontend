import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

export interface user {
  userName: string,
  password: string,
}

export const Status = {
  disable: {text: 'nzdisabled'},
  enable: {text: ''},
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;
  joinedPassword= '';

  userpassword(){
    const userName = this.validateForm.get('userName').value;
    const foundUser = this.users.find(user => user.userName === userName);

    if (foundUser) {
      const passwordArray = new Array(foundUser.password.length);
      return passwordArray;

    } else {
      return [];
    }
  }
  
  concatenatedPassword(): void {
    for (let i=0; i<this.userpassword().length; i++){
      this.validateForm.get('password'+i).valueChanges.subscribe((passwords: string[]) => {
        this.joinedPassword = passwords.join('');
      });
    }
  }

  submitForm(): void {
    const userName = this.validateForm.get('userName').value;
    const password = this.validateForm.get('password').value;
    const foundUser = this.users.find(user => user.userName === userName && user.password === this.joinedPassword);


    this.concatenatedPassword(); // Call the function here

    console.log(this.concatenatedPassword);
    console.log(password);

    if (this.validateForm.valid && foundUser) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  users: user[] = [
    {
      userName: 'Joao',
      password: '1234567890'
    },
    {
      userName: 'Daniel',
      password: '123456'
    },
    {
      userName: 'Vasco',
      password: '1234'
    },
    {
      userName: 'Bruno',
      password: '12345678901'
    },
  ];


  constructor(private fb: UntypedFormBuilder) { }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }


  onDigitInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const nextInput = input.nextElementSibling as HTMLInputElement;
    const previousInput = input.previousElementSibling as HTMLInputElement;
  
    if (event.key !== 'Backspace' && nextInput) {
      nextInput.focus();
    } else if (event.key === 'Backspace' && previousInput) {
      previousInput.focus();
    }
  }
  

/*   onDigitInput(event){

    let element;
    if (event.code !== 'Backspace')
         element = event.srcElement.nextElementSibling;
 
     if (event.code === 'Backspace')
         element = event.srcElement.previousElementSibling;
 
     if(element == null)
         return;
     else
         element.focus();
 } */
}