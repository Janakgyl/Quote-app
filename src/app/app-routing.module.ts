import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create', component:CreateQuoteComponent, canActivate:[authGuard]},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
