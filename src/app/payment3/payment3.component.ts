import { Component, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { transactions } from '../transactions/transactions.component';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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

  faMoneyBillTrendUp=faMoneyBillTrendUp;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.router.navigate(['/dashboard']);
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


  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      account: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      datePicker: [null, [Validators.required]],
      description: [null, [Validators.required]],
      agree: [null, [Validators.required]]
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
