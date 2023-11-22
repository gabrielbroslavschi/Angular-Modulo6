import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){}

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }

  ngOnInit(): void {
        
  }

}
