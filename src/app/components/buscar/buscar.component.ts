import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from "../../services/productos.service";
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 termino:string = undefined;

  constructor(private route:ActivatedRoute,
                        public _ps:ProductosService) {


               route.params.subscribe(parametros =>{

                      this.termino = parametros['termino'];
                      console.log(this.termino);
                      _ps.buscarProducto(this.termino);
               })
   }

  ngOnInit() {
  }

}
