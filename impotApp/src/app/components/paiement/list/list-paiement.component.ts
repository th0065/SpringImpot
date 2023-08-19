import { Component,OnInit } from '@angular/core';
import { Paiement } from 'src/app/models/paiement.model';
import { PaiementService } from '../../../services/paiement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-paiement',
  templateUrl: './list-paiement.component.html',
  styleUrls: ['./list-paiement.component.css']
})
export class ListPaiementComponent {
paiement:any=[];
page:number = 1;
count:number = 0;
tableSize:number= 5;
tableSizes:any=[2,4,6,8];

constructor(private paiementService: PaiementService,
  private router:Router) {}

  ngOnInit():void{
    this.getPaiements();
  }

  private getPaiements(){
    this.paiementService.getPaiementsList().subscribe( 
      (response)=>{
        this.paiement=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onTableDataChange(event:any){
  this.page = event;
  this.getPaiements();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getPaiements();
}

  PaiementDetails(Id:number){
    this.router.navigate(['Paiement-details', Id]);
  }

  updatePaiement(Id:number){
    this.router.navigate(['update-Paiement', Id]);
  }

  deletePaiement(data:any){
    var index = index = this.paiement.map(x => {return x.firstName}).indexOf(data.firstName);
     return this.paiementService.deletePaiement(data.id).subscribe(res => {
      this.paiement.splice(index, 1)
       console.log('Infos supprimés!');
       alert('Infos supprimés!');
     })
  }
}

