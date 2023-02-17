import { Component, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { transactions } from '../transactions/transactions.component';

@Component({
  selector: 'app-payment3',
  templateUrl: './payment3.component.html',
  styleUrls: ['./payment3.component.css']
})
export class Payment3Component {
  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  @Input () transactions: any;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.validateForm.value.push(this.transactions);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nickname: [null, [Validators.required]],
      datePicker: [null],
      description: [null],
      agree: [false]
    });
  }


  inputValue?: string;



  addSpace() {
    let input = document.getElementById("input_n") as HTMLInputElement;
  
    input.onkeydown = function () {
        if (input.value.length > 0) {
            if (input.value.length % 4 === 0) {
                input.value += " ";
            }
        }
    };
  }
}
