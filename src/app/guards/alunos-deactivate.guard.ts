import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs";
import { IFormCanDeactivate } from "./iform-canDeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
       
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            
            return component.podeDesativar();
    }
}