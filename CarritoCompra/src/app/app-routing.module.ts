import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {LOCALE_ID} from '@angular/core';

const routes: Routes = [];

@NgModule({
  /*
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr' // 'de' for Germany, 'fr' for France ...
   }],*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
