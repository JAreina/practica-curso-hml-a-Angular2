import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ProductosService {

urlProductos:string = "https://cursoudemyangular.firebaseio.com/productos_idx.json";
urlProducto:string =
"https://cursoudemyangular.firebaseio.com/productos/"
productos: any []=[];
productosFiltrados : any []=[];
sinResultadosBusqueda:string ="NO SE HAN ENCONTRADO RESULTADOS PARA SU BÚSQUEDA";
cargandoProductos : boolean = true;

  constructor(private _http: Http) {
              this.cargarProductos();
  }


public cargarProducto(cod:string){
  return this._http.get(`${this.urlProducto}${cod}.json`)
}


public buscarProducto(termino:string){

    console.log("BUSCANDO----");
    console.log(this.productos.length);

    if(this.productos.length ===0){
      this.cargarProductos().then( ()=>{
                  this.filtrar_productos(termino);
      });
    }else{
            this.filtrar_productos(termino);
    }


}

private filtrar_productos(termino:string){
  this.productosFiltrados =[];
  this.productos.forEach(prod =>{

  termino = termino.toLowerCase();

  if (prod.categoria.indexOf(termino) >=0 ||
        prod.titulo.toLowerCase().indexOf(termino)>=0){
          this.productosFiltrados.push(prod);
            console.log(prod)
        }else{

        }


  })
}

public cargarProductos ()
{
  if (this.productos.length ===0){


let promesa = new Promise( (resolve,reject) =>{
  this.cargandoProductos = true;
         this._http.get(this.urlProductos)
                        .subscribe(res =>{
                              console.log(res.json());

                              setTimeout( ()=>{
                                this.cargandoProductos=false;
                                this.productos=res.json();
                                resolve();
                              },1500);

                        });


})
return promesa;

  }
}

}
