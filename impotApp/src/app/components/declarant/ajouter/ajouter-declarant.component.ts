import { Component, OnInit,NgZone } from '@angular/core';
import { DeclarantService } from '../../../services/declarant.service';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-declarant',
  templateUrl: './ajouter-declarant.component.html',
  styleUrls: ['./ajouter-declarant.component.css']
})
export class AjouterDeclarantComponent implements OnInit {


addForm:FormGroup;
declarant:any=[];

ngOnInit(): void {
  
 this.addDeclarant();
}

constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  public declarantService: DeclarantService
) {}

addDeclarant() {
  this.addForm = this.fb.group({
    raisonSociale: [''],
    email: [''],
    adresse: [''],
    telephone: [''],
   
  });
}

submitForm(){
  this.declarantService.addDeclarant(this.addForm.value)
  .subscribe((res)=>{
    console.log('Infos ajoutées');
    alert("Infos Ajoutées");
    this.ngZone.run(()=>this.router.navigateByUrl('/'));
  });
}

}
