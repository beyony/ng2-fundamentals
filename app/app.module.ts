import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from "@angular/router";

import {ObjectsAppComponent} from "./object-app.component";
import {ObjectsListComponent} from "./objects/object-list.component";
import {ObjectThumbnailComponent} from "./objects/object-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {ObjectService} from "./objects/shared/object.service";
import {ToastrService} from "./common/toastr.service";
import {ObjectDetailsComponent} from "./objects/object-details/object.details.component";
import {appRoutes} from "./routes";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        ObjectsAppComponent,
        ObjectsListComponent,
        ObjectThumbnailComponent,
        NavBarComponent,
        ObjectDetailsComponent
    ],
    providers: [
        ObjectService,
        ToastrService
    ],
    bootstrap: [ObjectsAppComponent]
})
export class AppModule {

}