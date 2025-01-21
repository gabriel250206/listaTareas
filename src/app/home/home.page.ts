import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  items: {id:number;name:string;date:string; completed:boolean}[]=[]
  nextId:number=1

  constructor() {}

  addItem(name:string,date:string):void{
    
  }

}
