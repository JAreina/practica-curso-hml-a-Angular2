import { RouterModule, Routes } from '@angular/router';
import {AboutComponent,
              PortafolioComponent,
             ProductComponent,
           BuscarComponent} from './index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
      { path: 'product/:id', component: ProductComponent },
        { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing =
        RouterModule.forRoot(app_routes, {useHash:true});
// useHash para crear rutas
