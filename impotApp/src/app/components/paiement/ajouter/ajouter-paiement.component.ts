import { Component, OnInit,NgZone } from '@angular/core';
import { DeclarationService } from '../../../services/declaration.service';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-ajouter-paiement',
  templateUrl: './ajouter-paiement.component.html',
  styleUrls: ['./ajouter-paiement.component.css']
})
export class AjouterPaiementComponent implements OnInit {


addForm:FormGroup;
declarations:any=[];

ngOnInit(): void {
  
 this.addPaiement();
 this.getDeclarations();
}

constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  public paiementService: PaiementService,
  public declarationService: DeclarationService
) {}
private getDeclarations(){
  this.declarationService.getDeclarationsList().subscribe( 
    (response)=>{
      this.declarations=response;
      console.log(response);
    },
    (error)=>{
      console.log(error);
    }
  );
}
addPaiement() {
  this.addForm = this.fb.group({
    montantPaiement: null,
    datePaiement: null,
    declaration: null,
   
  });
}

submitForm(){
  this.paiementService.addPaiement(this.addForm.value)
  .subscribe((res)=>{
    console.log('Infos ajoutées');
    alert("Infos Ajoutées");
    this.ngZone.run(()=>this.router.navigateByUrl('/'));
  });
}

}
