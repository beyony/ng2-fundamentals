import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/Subject";


@Injectable()
export class ObjectService {
    objects: any;

    constructor(private http: HttpClient) {
    }

    getObjects() {
        let subject = new Subject();
        this.http.get('http://localhost:8080/api/objects').subscribe(data => {
            subject.next(data);
            subject.complete();
        });
        return subject;
    }

    getObject(id: String) {
        let subject = new Subject();
        this.http.get('http://localhost:8080/api/object/' + id).subscribe(data => {
            subject.next(data);
            subject.complete();
        });
        return subject;
    }

}
