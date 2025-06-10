import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FusionFinancialsComponent } from './fusion-financials/fusion-financials.component';

export const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "fusion-financials", component: FusionFinancialsComponent}
];
