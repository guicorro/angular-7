import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AboutComponent } from './components/views/about/about.component';
import { ProjectsComponent } from './components/views/projects/projects.component';
import { ContactsComponent } from './components/views/contacts/contacts.component';
import { NotFoundComponent } from './components/views/not-found/not-found.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact', component: ContactsComponent},
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
