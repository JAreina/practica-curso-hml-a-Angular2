import { Component, OnInit } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
         anyo:number = new Date().getFullYear();
  constructor(public  _is: InformacionService) { }

  ngOnInit() {
  }

}
