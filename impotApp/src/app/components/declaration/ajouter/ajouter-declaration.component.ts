import { Component, OnInit,NgZone } from '@angular/core';
import { DeclarationService } from '../../../services/declaration.service';
import { DeclarantService } from '../../../services/declarant.service';

import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-declaration',
  templateUrl: './ajouter-declaration.component.html',
  styleUrls: ['./ajouter-declaration.component.css']
})
export class AjouterDeclarationComponent implements OnInit {


addForm:FormGroup;
declaration:any=[];
declarants:any=[];

ngOnInit(): void {
  
 this.addDeclaration();
 this.getDeclarants();
}

private getDeclarants(){
  this.declarantService.getDeclarantsList().subscribe( 
    (response)=>{
      this.declarants=response;
      console.log(response);
    },
    (error)=>{
      console.log(error);
    }
  );
}
constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  public declarationService: DeclarationService,
  public declarantService: DeclarantService
) {}

addDeclaration() {
  this.addForm = this.fb.group({
    dateDeclaration: [],
    montantDeclaration: [''],
    declarant: [],
   
   
  });
}

submitForm(){
  this.declarationService.addDeclaration(this.addForm.value)
  .subscribe((res)=>{
    console.log(this.addForm.value);
    alert(this.addForm.value);
    this.ngZone.run(()=>this.router.navigateByUrl('/'));
  });
}

}
