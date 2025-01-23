import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  items: {id:number;name:string;dateI:string; dateF:string; ubicacion:string; completed:boolean;nombreEncargado:string;telefono:string}[]=[]
  nextId:number=1

  constructor() {}

  addItem(name:string,dateI:string, dateF:string ,ubicacion:string,  nombreEncargado:string, telefono:string):void{
    if(name.trim() && dateI.trim()){
      this.items.push({
        id:this.nextId++,
        name:name.trim(),
        dateI:dateI.trim(),
        dateF:dateF.trim(),
        ubicacion:ubicacion.trim(),
        completed:false,//por defecto no esta completo
        nombreEncargado:nombreEncargado.trim(),
        telefono:telefono.trim(),
      });
    }else{
      console.error('el nombre y la fecha no pueden estar vacios')
    }
  }
  toggleCompleted(id:number):void{
    const item=this.items.find(item=>item.id===id);
    if(item) item.completed=!item.completed;
  }
  removeItem(id:number):void{
    this.items=this.items.filter(item=>item.id !==id);
  }

}
