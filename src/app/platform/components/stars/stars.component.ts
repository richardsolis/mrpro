import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-stars',
  providers:[
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => StarsComponent)},
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => StarsComponent)}
  ],
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements ControlValueAccessor {
  value: number;
  onChanged: (val) => void;
  onTouched: () => void;

  clickHandler(val){
    this.value = val;
    this.onChanged(val);
    this.onTouched();
  }
  writeValue(val : number): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(c){
    return this.value <= 0 ? {required: true} : null;
  }
  
}
