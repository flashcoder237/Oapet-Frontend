import { PeriodeService } from './../periode.service';
import { Component, OnInit, Input } from '@angular/core';
import { Periode } from './periode'

@Component({
  selector: 'app-periode',
  templateUrl: './periode.component.html',
  styleUrls: ['./periode.component.css']
})

export class PeriodeComponent implements OnInit {
  periodes: Array <Periode> = [];
  modification = true;
  constructor(private PeriodeService : PeriodeService) {}
  ngOnInit(): void {
    this.PeriodeService.getAllpropriete().subscribe(
      data => {
        this.periodes  = data;
        console.log(data)
      }
     )
  }
     public Modification(): void{
    this.modification = !this.modification;
     }

  public statut(Period: Periode): void{
    Period.statut = '2';
  }
  
  public update(Period: Periode) {
    this.PeriodeService.updatePeriode(Period);
  }
}
