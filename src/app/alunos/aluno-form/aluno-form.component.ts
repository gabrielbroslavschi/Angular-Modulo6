import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-canDeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements IFormCanDeactivate{

  aluno: any;
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute,  private alunosService:AlunosService){
   
  }


  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });

    if(this.aluno === null){
      this.aluno = {};
    }
    
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
