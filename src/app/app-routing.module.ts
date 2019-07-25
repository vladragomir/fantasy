import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PackagesComponent} from './packages/packages.component';
import {RoomsComponent} from './rooms/rooms.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
