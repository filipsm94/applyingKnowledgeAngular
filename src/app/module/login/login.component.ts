import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
    this.loginForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(2)]],
      pass: [null, Validators.required]
    })
  }

  public ngOnInit(): void {
  }

  public async loginAction(){
    console.log(this.loginForm);
    const user: IUser={
      username: this.loginForm.get('name').value,
      pass: this.loginForm.get('pass').value,

    }
    const response = await this.authService.isUserActive(user);
    console.log(response);
    
  }

}
