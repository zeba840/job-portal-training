import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FusionFinancialsComponent } from './fusion-financials/fusion-financials.component';
import { OicBiPublisherComponent } from './oic-bi-publisher/oic-bi-publisher.component';
import { FusionPpmComponent } from './fusion-ppm/fusion-ppm.component';
import { FusionHcmComponent } from './fusion-hcm/fusion-hcm.component';
import { FusionScmComponent } from './fusion-scm/fusion-scm.component';


export const routes: Routes = [
  { path: "", redirectTo: '/Homepage', pathMatch: 'full' },
  {path: "Homepage", component: HomePageComponent},
  {path: "fusion-financials", component: FusionFinancialsComponent},
  {path: "oic-training", component:OicBiPublisherComponent},
  {path:"fusion-ppm", component:FusionPpmComponent},
  {path:"fusion-hcm", component:FusionHcmComponent},
  {path:"fusion-scm", component:FusionScmComponent}
];
