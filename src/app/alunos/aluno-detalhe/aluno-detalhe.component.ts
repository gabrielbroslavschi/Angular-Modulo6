import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];
    //   this.aluno = this.alunosService.getAluno(id);
    // });
    // if (this.aluno === null) {
    //   this.aluno = {};
    // }

    this.inscricao = this.route.data.subscribe(
      (info: any) => {
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
