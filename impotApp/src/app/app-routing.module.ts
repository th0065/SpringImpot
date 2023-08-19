import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterDeclarantComponent } from './components/declarant/ajouter/ajouter-declarant.component';
import { ListDeclarantComponent } from './components/declarant/list/list-declarant.component';
import { DetailsDeclarantComponent } from './components/declarant/details/details-declarant.component';
import { UpdateDeclarantComponent } from './components/declarant/update/update-declarant.component';
import { ListDeclarationComponent } from './components/declaration/list/list-declaration.component';
import { AjouterDeclarationComponent } from './components/declaration/ajouter/ajouter-declaration.component';
import { UpdateDeclarationComponent } from './components/declaration/update/update-declaration.component';
import { DetailsDeclarationComponent } from './components/declaration/details/details-declaration.component';
import { ListPaiementComponent } from './components/paiement/list/list-paiement.component';
import { DetailsPaiementComponent } from './components/paiement/details/details-paiement.component';
import { UpdatePaiementComponent } from './components/paiement/update/update-paiement.component';
import { AjouterPaiementComponent } from './components/paiement/ajouter/ajouter-paiement.component';
const routes: Routes = [

  { path: '', redirectTo: 'declarants', pathMatch: 'full' },
  { path: 'declarants', component: ListDeclarantComponent },
  { path: 'declarants/:id', component: DetailsDeclarantComponent },
  { path: 'declarant/:id', component: UpdateDeclarantComponent },
  { path: 'ajouter', component: AjouterDeclarantComponent },
  { path: 'declarations', component: ListDeclarationComponent },
  { path: 'declarations/:id', component: DetailsDeclarationComponent },
  { path: 'declaration/:id', component: UpdateDeclarationComponent },
  { path: 'addDeclaration', component: AjouterDeclarationComponent },
  { path: 'paiements', component: ListPaiementComponent },
  { path: 'paiements/:id', component: DetailsPaiementComponent },
  { path: 'paiement/:id', component: UpdatePaiementComponent },
  { path: 'addPaiement', component: AjouterPaiementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
