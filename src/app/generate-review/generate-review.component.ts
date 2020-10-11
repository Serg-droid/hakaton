import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../shared/rest.service';

@Component({
  selector: 'app-generate-review',
  templateUrl: './generate-review.component.html',
  styleUrls: ['./generate-review.component.scss']
})
export class GenerateReviewComponent implements OnInit {

  form: FormGroup
  submitted: boolean = false
  files: File[]

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      file: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.submitted = true
    const file = this.files[0]
    console.log(file)

    this.rest.loadFile(file).subscribe(
      () => {
        this.submitted = false
      },
      (e) => {
        console.log(e)
        this.form.reset()
        this.submitted = false
      }
    )
  }

  handleFileInput(el) {
    console.log(el)
  }

}
