import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  location: string = "";
  // @ts-ignore
  form: FormGroup = FormGroup.EMPTY;

  @Output() searchcriteria = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['']
    });
    this.location = this.form.value.name;
  }

  resetInput() {
    this.form.reset();
  }


  submit() {
    this.updateLocation();
  }

  updateLocation() {
    this.searchcriteria.emit(this.form.value.name)

  }

}
