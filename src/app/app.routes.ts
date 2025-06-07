import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectRequestFormComponent } from './components/project-request-form/project-request-form.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    { path: 'solicitar-projeto', component: ProjectRequestFormComponent },
];
