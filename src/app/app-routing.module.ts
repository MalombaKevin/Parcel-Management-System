import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParcelsComponent } from './parcels/parcels.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'deliveryForm', component:DeliveryFormComponent},
  {path: 'parcels', component:ParcelsComponent},

  {path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
