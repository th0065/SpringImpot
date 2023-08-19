import { Component,OnInit } from '@angular/core';
import { Declarant } from 'src/app/models/declarant.model';
import { DeclarantService } from '../../../services/declarant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-declarant',
  templateUrl: './list-declarant.component.html',
  styleUrls: ['./list-declarant.component.css']
})
export class ListDeclarantComponent {
declarant:any=[];
page:number = 1;
count:number = 0;
tableSize:number= 5;
tableSizes:any=[2,4,6,8];

constructor(private declarantService: DeclarantService,
  private router:Router) {}

  ngOnInit():void{
    this.getDeclarants();
  }

  private getDeclarants(){
    this.declarantService.getDeclarantsList().subscribe( 
      (response)=>{
        this.declarant=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onTableDataChange(event:any){
  this.page = event;
  this.getDeclarants();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getDeclarants();
}

  declarantDetails(Id:number){
    this.router.navigate(['declarant-details', Id]);
  }

  updateDeclarant(Id:number){
    this.router.navigate(['update-declarant', Id]);
  }

  deleteDeclarant(data:any){
    var index = index = this.declarant.map(x => {return x.raisonSociale}).indexOf(data.raisonSociale);
     return this.declarantService.deleteDeclarant(data.id).subscribe(res => {
      this.declarant.splice(index, 1)
       console.log('Infos supprimés!');
       alert('Infos supprimés!');
     })
  }
}

