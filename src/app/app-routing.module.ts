import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListaTutorialesComponent } from './lista-tutoriales/lista-tutoriales.component';
import { AgregarTutorialComponent } from './agregar-tutorial/agregar-tutorial.component';
import { TutorialDetallesComponent } from './tutorial-detalles/tutorial-detalles.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { AgregarTemasComponent } from './agregar-temas/agregar-temas.component';
import { ListaTemasComponent } from './lista-temas/lista-temas.component';
import { TemasalumnosComponent } from './temasalumnos/temasalumnos.component';
const routes: Routes = [
  { path: 'home', component: SearchImagesComponent },
  { path: 'ssf', component: AgregarTemasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'tutoriales', component: ListaTutorialesComponent },
  { path: 'tutoriales/:id', component: TutorialDetallesComponent },
  { path: 'agregar', component: AgregarTutorialComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


