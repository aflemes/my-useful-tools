import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkingWithJsonComponent } from './components/working-with-json/working-with-json.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'working-with-json', component: WorkingWithJsonComponent}
];
