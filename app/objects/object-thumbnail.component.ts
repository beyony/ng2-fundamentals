import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'object-thumbnail',
    template: `
        <div [routerLink]="['/objects', object.id]" class="well hoverwell thumbnail">
            <h2>{{object.name}}</h2>
            <div>Date: {{object.date}}</div>
            <div>Time: {{object.time}}</div>
            <div>Price: {{object.price}}</div>
        </div>`,
    styles: [`
        .well div { color: #bbb; }
    `]

})
export class ObjectThumbnailComponent {
    @Input() object: any;
}