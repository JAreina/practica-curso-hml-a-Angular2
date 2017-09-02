import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ProductosService {

url:string = "https://cursoudemyangular.firebaseio.com/productos_idx.json";

productos: any []=[];
cargandoProductos : boolean = true;

  constructor(private _http: Http) {
              this.cargarProductos();
  }
public cargarProductos ()
{
  if (this.productos.length ===0){

        this.cargandoProductos = true;
               this._http.get(this.url)
                              .subscribe(res =>{
                                    console.log(res.json());

                                    setTimeout( ()=>{
                                      this.cargandoProductos=false;
                                      this.productos=res.json();
                                    },1500);

                              });
  }
}

}
