import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: GetstartedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
