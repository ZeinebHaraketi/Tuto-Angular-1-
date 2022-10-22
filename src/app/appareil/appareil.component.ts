import { Component,Input ,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //appareilName= "Machine à laver";
  @Input() appareilName: string;
  //appareilStatus = "éteint";
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  

  constructor(private appareilService: AppareilService) { 
    this.appareilName= '';
    this.appareilStatus= '';
    this.indexOfAppareil= 0;
  }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus == 'allumé') {
      return 'green';
    }
    else if (this.appareilStatus == 'éteint'){
      return 'red';
    }
    return 'cream';
  }

  OnSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  OnSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
