import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './notes/list/list.component';
import { EditorComponent } from './notes/editor/editor.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'editor/:id', component: EditorComponent},
    { path: 'list', component: ListComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: HomeComponent},
];

