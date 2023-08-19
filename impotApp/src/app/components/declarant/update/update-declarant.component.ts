import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DeclarantService } from '../../../services/declarant.service';

@Component({
  selector: 'app-update-declarant',
  templateUrl: './update-declarant.component.html',
  styleUrls: ['./update-declarant.component.css']
})
export class UpdateDeclarantComponent  implements OnInit {
  declarant: any = [];
  updateFrom: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public declarantService: DeclarantService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.declarantService.getDeclarant(id).subscribe((data) => {
      this.updateFrom = this.fb.group({
        id: [data.Id],
        raisonSociale: [data.raisonSociale],
        email: [data.email],
        adresse: [data.adresse],
        telephone: [data.telephone]
      })
    })
  }
  updateForm(){
    this.updateFrom = this.fb.group({
      Id: null,
      raisonSociale: [''],
      email: [''],
      adresse: [''],
      telephone: ['']
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.declarantService.updateDeclarant(Number(id), this.updateFrom.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    })
  }
}