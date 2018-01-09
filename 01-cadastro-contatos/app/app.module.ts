import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contato.module';
import { ContatoService } from './contatos/services/contato.service';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule
        
        ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        ContatoService
    ]
})

export class AppModule{}