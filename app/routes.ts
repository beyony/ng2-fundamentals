import {Routes} from "@angular/router";
import {ObjectsListComponent} from "./objects/object-list.component";
import {ObjectDetailsComponent} from "./objects/object-details/object.details.component";

export const appRoutes:Routes = [
    {path: 'objects', component: ObjectsListComponent},
    {path: 'objects/:id', component: ObjectDetailsComponent},
    {path: '', redirectTo: '/objects', pathMatch: 'full'}
    ];