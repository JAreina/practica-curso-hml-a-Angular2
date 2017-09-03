import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
 producto :any =undefined;
 cod:string = undefined;

  constructor(private route:ActivatedRoute,
                      private _ps:ProductosService) {

         route.params.subscribe(parametros =>{
           console.log(parametros);
           console.log(parametros['id']);

           _ps.cargarProducto(parametros['id'])
                            .subscribe(res =>{
                              this.cod = parametros['id'];
                              console.log(res.json());
                              this.producto = res.json();
                            })
         })
  }

  ngOnInit() {
  }

}
