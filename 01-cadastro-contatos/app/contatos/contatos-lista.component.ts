import { Component , OnInit} from '@angular/core';
import { ContatoService } from './services/contato.service';
import { Contato } from './contato.model';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
  
})

export class ContatosListaComponent implements OnInit{

    constructor(public contatoService: ContatoService){}

    ngOnInit():void{
        this.getListContato();
    }
    
    public contatos : Contato[];
    getListContato(){

        this.contatoService.getContatosSlowly()
            .then((contatos: Contato[]) =>   {
                this.contatos = contatos;
            }).catch(err => console.log(err));
        
    }
    
}