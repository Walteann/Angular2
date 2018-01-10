import { Contato } from './contato.model';
import { ContatoService } from './services/contato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})

export class ContatoDetalheComponent implements OnInit {

    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {

        this.contato = new Contato(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                console.log(id);
                this.contatoService.getContatoPorId(id)
                    .then((contato: Contato) => {
                        this.contato = contato
                    });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true, 
            'has-danger': (!isValid && !isPristine), 
            'has-success': (isValid && !isPristine) 
        };
    }

    getControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true, 
            'form-control-danger': (!isValid && !isPristine), 
            'form-control-success': (isValid && !isPristine) 
        };
    }
}

