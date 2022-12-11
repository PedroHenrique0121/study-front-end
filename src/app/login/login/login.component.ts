import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  formulario!: FormGroup;
  user!: User;

  constructor(private authService: AuthService,
   private router: Router) {
    this.user= new User()
   }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      login: new FormControl('', [Validators.required, ]),
      senha: new FormControl('', [Validators.required]),
    });

  }

  get login() {
    return this.formulario.get("login")
  }

  get senha() {
    return this.formulario.get("senha")
  }

  logar() {
    this.authService.tentarLogar(this.user.login, this.user.senha)
      .subscribe(response=>{
        const access_token = JSON.stringify(response.access_token);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/']);
      });
  }
}
