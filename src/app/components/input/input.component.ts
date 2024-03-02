import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class InputComponent implements OnInit {
  @Output() valueEvent = new EventEmitter<string>();
  @Input() value = '';

  private formBuilder = inject(FormBuilder);
  input = this.formBuilder.group({
    value: [this.value],
  });
  constructor() {}
  ngOnInit() {}
  onKeydown() {
    this.valueEvent.emit(this.input.value.value);
  }
  clear(): void {
    this.value = '';
  }
}
