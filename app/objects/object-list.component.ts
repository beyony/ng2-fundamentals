import {Component} from "@angular/core";
import {ObjectService} from "./shared/object.service";
import {OnInit} from "@angular/core";
import {ToastrService} from "../common/toastr.service";

@Component({
    template: `
        <div>
            <h1>All Objects</h1>
            <hr>
            <object-thumbnail (click)="handleThumbnailClick(object.name)" *ngFor="let object of objects"
                             [object]="object"></object-thumbnail>
        </div>`
})
export class ObjectsListComponent implements OnInit {
    objects: any;

    constructor(private objectService: ObjectService, private toastrService: ToastrService) {
    }

    ngOnInit() { // don't do long term processes in the constructor -> use ngOnInit instead!
        this.objects = this.objectService.getObjects();
        console.log(this.objectService.getObjects());
    }

    handleThumbnailClick(objectName) {
        this.toastrService.error(objectName, "foo");
    }

}