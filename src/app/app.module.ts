import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BuscarComponent } from './components/buscar/buscar.component';
//rutas
import{app_routing} from './components/app.routes';


//servicios
import {HttpModule} from '@angular/http';
import{InformacionService} from './services/informacion.service';
import{ProductosService} from './services/productos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductComponent,
    LoadingComponent,
    BuscarComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
      app_routing
  ],
  providers: [InformacionService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
