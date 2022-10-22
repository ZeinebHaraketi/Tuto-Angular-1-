import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //title = 'tuto';
  isAuth= false;

  lastUpdate = new Date();
 /*lastUpdate = new Promise(
  (resolve,reject) => {
    const date = new Date();
    setTimeout(
      ()=>{
        resolve(date);
      },2000
    );
  }
 );*/


 appareils: any[] = [];
  //appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () =>{
        this.isAuth= true;
      },4000
    );
  }

  onAllumer(){
    //console.log('On allume tout !');
     this.appareilService.switchOnAll(); 
  }
  onEteintre(){
    this.appareilService.switchOffAll();
  }

  ngOnInit(): void {
    this.appareils= this.appareilService.appareils;
  }
}
