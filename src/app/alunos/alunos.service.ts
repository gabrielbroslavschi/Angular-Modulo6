import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: "João", email: "joao@email.com"},
    {id: 2, nome: "Gabriel", email: "gabriel@email.com"},
    {id: 3, nome: "Renato", email: "renato@email.com"},
    {id: 4, nome: "Astolfo", email: "astolfo@email.com"},
    {id: 5, nome: "Jorge", email: "jorge@email.com"},
    {id: 6, nome: "Danilo", email: "danilo@email.com"},
    {id: 7, nome: "Gustavo", email: "gustova@email.com"},
    {id: 8, nome: "Antonio", email: "antonio@email.com"},
    {id: 9, nome: "Lucas", email: "lucas@email.com"},
    {id: 10, nome: "Davi", email: "davi@email.com"},
  ]

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i<this.alunos.length; i++){
     let aluno = this.alunos[i];
     if(aluno.id == id){
       return aluno;
     }
    }
    return null;
 }

  constructor() { }
}
