import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: "Angular2"},
      {id: 2, nome: "JavaScript"},
      {id: 3, nome: "TypeScript"},
      {id: 4, nome: "Python"},
      {id: 5, nome: "NodeJS"},
      {id: 6, nome: "MySQL"},
      {id: 7, nome: "SQL Server"},
      {id: 8, nome: "NoSQL"},
      {id: 9, nome: "MariaDB"},
      {id: 10, nome: "JWT"},
    ]
  }

  getCurso(id: number){
     let cursos = this.getCursos();
     for(let i=0; i<cursos.length; i++){
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
     }
     return null;
  }

  constructor() { }
}
