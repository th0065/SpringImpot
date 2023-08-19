import { Component,OnInit } from '@angular/core';
import { Declaration } from 'src/app/models/declaration.model';
import { DeclarationService } from '../../../services/declaration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-declaration',
  templateUrl: './list-declaration.component.html',
  styleUrls: ['./list-declaration.component.css']
})
export class ListDeclarationComponent {
declaration:any=[];
page:number = 1;
count:number = 0;
tableSize:number= 5;
tableSizes:any=[2,4,6,8];

constructor(private DeclarationService: DeclarationService,
  private router:Router) {}

  ngOnInit():void{
    this.getDeclarations();
  }

  private getDeclarations(){
    this.DeclarationService.getDeclarationsList().subscribe( 
      (response)=>{
        this.declaration=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onTableDataChange(event:any){
  this.page = event;
  this.getDeclarations();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getDeclarations();
}

  DeclarationDetails(id:number){
    this.router.navigate(['declaration-details', id]);
  }

  updateDeclaration(id:number){
    this.router.navigate(['update-declaration', id]);
  }

  deleteDeclaration(data:any){
    var index = index = this.declaration.map(x => {return x.dateDeclaration}).indexOf(data.dateDeclaration);
     return this.DeclarationService.deleteDeclaration(data.id).subscribe(res => {
      this.declaration.splice(index, 1)
       console.log('Infos supprimés!');
       alert('Infos supprimés!');
     })
  }
}

