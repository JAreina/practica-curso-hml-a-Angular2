import { RouterModule, Routes } from '@angular/router';
import {AboutComponent,
              PortafolioComponent,
             ProductComponent} from './index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
      { path: 'product', component: ProductComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing =
        RouterModule.forRoot(app_routes, {useHash:true});
// useHash para crear rutas
