import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';

import {appRoutes} from "./routes";
import {ObjectsAppComponent} from "./object-app.component";
import {ObjectsListComponent} from "./objects/object-list.component";
import {ObjectThumbnailComponent} from "./objects/object-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {ObjectService} from "./objects/shared/object.service";
import {ToastrService} from "./common/toastr.service";
import {ObjectDetailsComponent} from "./objects/object-details/object.details.component";
import {CreateObjectComponent} from "./objects/object-create/create-object.component";
import {Error404Component} from "./errors/404.component";
import {ThreeService} from "./canvas/three.service";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [
        ObjectsAppComponent,
        ObjectsListComponent,
        ObjectThumbnailComponent,
        NavBarComponent,
        ObjectDetailsComponent,
        CreateObjectComponent,
        Error404Component
    ],
    providers: [
        ObjectService,
        ToastrService,
        ThreeService
    ],
    bootstrap: [ObjectsAppComponent]
})
export class AppModule {

}