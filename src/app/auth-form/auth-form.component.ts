import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../_shared/auth.service';
import {User} from '../_shared/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  form: FormGroup
  submitted: boolean = false
  showLoginForm: boolean = true

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(4)
      ])
    })


  }

  onSubmit() {
    this.submitted = true

    const user: User = {
      password: this.form.value.password,
      login: this.form.value.login
    }

    if(this.showLoginForm) {
      console.log('login')
      this.auth.login(user).subscribe(
        response => {
          console.log(response)
          this.submitted = false
          this.router.navigate(['/main'])
        },
        error => {
          this.submitted = false
        }
      )
    } else {
      console.log('register')
      this.auth.register(user).subscribe(
        response => {
          console.log(response)
          this.submitted = false
          this.router.navigate(['/main'])
        },
        error => {
          this.submitted = false
        }
      )
    }
  }

}
