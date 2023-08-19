import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DeclarationService } from '../../../services/declaration.service';
import { DeclarantService } from 'src/app/services/declarant.service';
@Component({
  selector: 'app-update-declaration',
  templateUrl: './update-declaration.component.html',
  styleUrls: ['./update-declaration.component.css']
})
export class UpdateDeclarationComponent  implements OnInit {
  Declaration: any = [];
  updateFrom: FormGroup;
  declarants:any=[];
  declar:any=[];
  ngOnInit() {
    this.updateForm();
    this.getDeclarants();
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public declarationService: DeclarationService,
    public declarantService:DeclarantService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.declarationService.getDeclaration(id).subscribe((data) => {
      this.updateFrom = this.fb.group({
        id: [data.id],
        dateDeclaration: [data.dateDeclaration],
        montantDeclaration: [data.montantDeclaration],
        declarant: [data.declarant],
       
      });
     this.declar=data.declarant;
    })
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
  updateForm(){
    this.updateFrom = this.fb.group({
      id: null,
      dateDeclaration: null,
      montantDeclaration: [''],
      declarant:null,
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.declarationService.updateDeclaration(Number(id), this.updateFrom.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    })
  }
}