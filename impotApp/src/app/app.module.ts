import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjouterDeclarantComponent } from './components/declarant/ajouter/ajouter-declarant.component';
import { DetailsDeclarantComponent } from './components/declarant/details/details-declarant.component';
import { ListDeclarantComponent } from './components/declarant/list/list-declarant.component';
import { UpdateDeclarantComponent } from './components/declarant/update/update-declarant.component';
import { ListDeclarationComponent } from './components/declaration/list/list-declaration.component';
import { AjouterDeclarationComponent } from './components/declaration/ajouter/ajouter-declaration.component';
import { DetailsDeclarationComponent } from './components/declaration/details/details-declaration.component';
import { UpdateDeclarationComponent } from './components/declaration/update/update-declaration.component';
import { ListPaiementComponent } from './components/paiement/list/list-paiement.component';
import { AjouterPaiementComponent } from './components/paiement/ajouter/ajouter-paiement.component';
import { DetailsPaiementComponent } from './components/paiement/details/details-paiement.component';
import { UpdatePaiementComponent } from './components/paiement/update/update-paiement.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterDeclarantComponent,
    DetailsDeclarantComponent,
    ListDeclarantComponent,
    UpdateDeclarantComponent,
    ListDeclarationComponent,
    AjouterDeclarationComponent,
    DetailsDeclarationComponent,
    UpdateDeclarationComponent,
    ListPaiementComponent,
    AjouterPaiementComponent,
    DetailsPaiementComponent,
    UpdatePaiementComponent

   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
