import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PaiementService } from '../../../services/paiement.service';
import { DeclarationService } from 'src/app/services/declaration.service';

@Component({
  selector: 'app-update-paiement',
  templateUrl: './update-paiement.component.html',
  styleUrls: ['./update-paiement.component.css']
})
export class UpdatePaiementComponent  implements OnInit {
  paiement: any = [];
  updateFrom: FormGroup;
  declarations:any=[];
  declar:any=[];

  ngOnInit() {
    this.updateForm();
    this.getDeclarations();
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public paiementService: PaiementService,
    public declarationService: DeclarationService,

    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.paiementService.getPaiement(id).subscribe((data) => {
      this.updateFrom = this.fb.group({
        id: [data.Id],
        datePaiement: [data.datePaiement],
        declaration: [data.declaration],
        montantPaiement: [data.montantPaiement],
       
      })
      this.declar=data.declaration;
    })
  }

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
  updateForm(){
    this.updateFrom = this.fb.group({
      Id: null,
      datePaiement: null,
      declaration: null,
      montantPaiement: [''],
      
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.paiementService.updatePaiement(Number(id), this.updateFrom.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    })
  }
}