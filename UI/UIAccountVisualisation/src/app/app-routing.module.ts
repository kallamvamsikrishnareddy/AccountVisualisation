import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyMaturityComponent } from './technology-maturity/technology-maturity.component';
import { SapianceComponent } from './sapiance/sapiance.component';

const routes: Routes = [
  {path: "", component: TechnologyMaturityComponent},
  {path: 'technologymaturity', component: TechnologyMaturityComponent},
  {path: 'sapiancereport', component: SapianceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
