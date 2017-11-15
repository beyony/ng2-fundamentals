import {Routes} from "@angular/router";
import {ObjectsListComponent} from "./objects/object-list.component";
import {ObjectDetailsComponent} from "./objects/object-details/object.details.component";
import {CreateObjectComponent} from "./objects/object-create/create-object.component";
import {Error404Component} from "./errors/404.component";


export const appRoutes: Routes = [
    {path: 'objects/new', component: CreateObjectComponent},
    {path: 'objects', component: ObjectsListComponent},
    {path: 'objects/:id', component: ObjectDetailsComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/objects', pathMatch: 'full'}
];