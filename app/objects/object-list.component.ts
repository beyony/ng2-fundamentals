import {Component} from "@angular/core";
import {ObjectService} from "./shared/object.service";
import {OnInit} from "@angular/core";
import {ToastrService} from "../common/toastr.service";

@Component({
    template: `
        <div>
            <h1>All Objects</h1>
            <hr>
            <object-thumbnail *ngFor="let object of objects"
                              [object]="object"></object-thumbnail>
        </div>`
})
export class ObjectsListComponent implements OnInit {
    objects: any;

    constructor(private objectService: ObjectService, private toastrService: ToastrService) {
    }

    // don't do long term processes in the constructor -> use ngOnInit instead!
    ngOnInit() {
        this.objectService.getObjects().subscribe(objects => {
            this.objects = objects;
        });
    }

}