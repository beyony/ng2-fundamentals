// will be called as:
// -->  /objects/1
// id is in the url!

import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {ObjectService} from "../shared/object.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: '/app/objects/object-details/object-details.component.html',
    styles: [
        `
            .container { padding-left: 20px; padding-right: 20px; }
            .object-image { height: 100px; }
        `
    ]
})
export class ObjectDetailsComponent implements OnInit {

    object: any;

    constructor(private objectService:ObjectService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.object = this.objectService.getObject(this.route.snapshot.params['id']);
    }

}