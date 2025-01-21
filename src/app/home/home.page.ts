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
    if(name.trim()&&date.trim()){
      this.items.push({
        id:this.nextId++,
        name:name.trim(),
        date:date.trim(),
        completed:false,//por defecto no esta completo
      });
    }else{
      console.error('el nombre y la fecha no pueden estar vacios')
    }
  }

}
