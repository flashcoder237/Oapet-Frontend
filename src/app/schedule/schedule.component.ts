import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

    public modification = false;
  public day: any[] = [
    {
      day: 'Lundi',
      number: 1,
 //     period: new Period('8h-10', 'Dr TCHOUPE MAURICE', 'iNF223')
    }, {
      day: 'Mardi',
      number: 2,
    }, {
      day: 'Mercredi',
      number: 3,
    }, {
      day: 'Jeudi',
      number: 4,
    }, {
      day: 'Vendredi',
      number: 5,
    }, {
      day: 'Samedi',
      number: 6,
    }, {
      day: 'Dimanche',
      number: 7,
    }
  ];

  public Modification(): void{
    this.modification = !this.modification;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
