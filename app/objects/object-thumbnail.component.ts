import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'object-thumbnail',
    template: `
        <div [routerLink]="['/objects', object._id]" class="well hoverwell thumbnail">
            <h2>{{object.name}}</h2>
            <div>Category: {{object.category.name}}</div>
            <div>Description: {{object.description}}</div>
        </div>`,
    styles: [`
        .well div { color: #bbb; }
    `]

})
export class ObjectThumbnailComponent {
    @Input() object: any;
}