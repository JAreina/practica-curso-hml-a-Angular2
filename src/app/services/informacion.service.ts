import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class InformacionService {

info:any={};
cargada:boolean = false;
equipo: any []=[];

urlFireBase:string="https://cursoudemyangular.firebaseio.com/equipo.json";

  constructor(private _http:Http) {
         this.cargarInfo();
         this.cargarDatos();


}

public cargarInfo(){
  this._http.get('assets/info.pagina.json')
                .subscribe(data =>{
                        console.log(data.json());
                        this.info =data.json() ;
                         this.cargada = true;
                      });
}


public cargarDatos(){
  this._http.get(this.urlFireBase)
                .subscribe(data =>{
                        console.log(data.json());
                        this.equipo =data.json() ;
                         this.cargada = true;
                      });
}

}
