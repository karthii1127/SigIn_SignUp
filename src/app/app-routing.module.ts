import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninSignUpComponent } from './signin-sign-up/signin-sign-up.component';

const routes: Routes = [
  {path:'',component:SigninSignUpComponent},
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
