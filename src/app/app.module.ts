import { FormsModule } from '@angular/forms';
// import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    AppRoutingModule,
    // AlunosModule,
  ],
  // providers: [CursosService],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
