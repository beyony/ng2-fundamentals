import {Component} from "@angular/core";
import {EventService} from "./shared/event.service";
import {OnInit} from "@angular/core";
import {ToastrService} from "../common/toastr.service";

@Component({
    template: `
        <div>
            <h1>Upcoming angular 2 Events</h1>
            <hr>
            <event-thumbnail (click)="handleThumbnailClick(event.name)" *ngFor="let event of events"
                             [event]="event"></event-thumbnail>
        </div>`
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventService: EventService, private toastrService: ToastrService) {
    }

    ngOnInit() { // don't do long term processes in the constructor -> use ngOnInit instead!
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastrService.error(eventName, "foo");
    }

}