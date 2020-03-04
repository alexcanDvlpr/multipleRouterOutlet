import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { LoginComponent } from './components/login/login.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';


const routes: Routes = [
  { path: '', component: GetstartedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: HomeComponent, children: [
    { path: 'characters', component: CharactersComponent },
    { path: 'movies', component: MoviesComponent },
    { path: '**', redirectTo: 'characters' },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
