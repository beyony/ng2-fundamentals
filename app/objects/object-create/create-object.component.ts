import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ThreeService} from "../../canvas/three.service";

@Component({
    templateUrl: '/app/objects/object-create/create-object.component.html',
    styles: [`


        .container {
            height: 80%;
            width: 100%;
            padding: 0;
            position: relative;
        }

        .scaleMax {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            /* NEW */
            position: absolute;
            top: 0;
            left: 0;
            height: 98%;
            width: 98%;
            left: 1%;
            top: 1%;
            /*border-radius: 10px;*/
            overflow: hidden;
            box-shadow: 4px 5px 10px 0px rgba(0, 0, 0, 0.37);
        }

        .container > ul {
            background-color: #3c4248;
            width: 100%;
        }

        .nav-pills {
            position: absolute;
            z-index: 5;
        }

        li.panel {
            float: right;
            margin: 4px 15px;
            cursor: pointer;
            font-size: 150%;
            color: #df691a;
            background: none;
        }

        .tab-content-container {
            height: 100%;
            background: #202020;
            padding: 10px;
            padding-top: 40px;
        }

        .clearfix {
            padding: 10px;
        }

        .col-md-6 {
            position: absolute;
            bottom: 10px;
            z-index: 5;
        }

        .CanvasHere {
            /* background: rebeccapurple; */
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            z-index: 1;
        }

        #canvas {
            position: absolute;
            top: 0;
            left: 0;
        }



    `]
})
export class CreateObjectComponent implements OnDestroy, OnInit {

    scaleMax: boolean;

    constructor(private router: Router, private threeService: ThreeService) {
    }

    ngOnInit() {
        this.threeService.init(false);
    }

    cancel() {
        this.router.navigate(['/objects']);
    }

    toggleScale() {
        this.scaleMax = !this.scaleMax;
        this.threeService.fitCanvasSize();
    }

    animationPause() {
        this.threeService.pause();
    }

    animationStart() {
        this.threeService.start();
    }

    tabChange(tab: Number) {
        switch(tab) {
            case 1: this.animationPause();
            break;
            case 2: this.animationStart();
            break;
            case 3: this.animationPause();
        }
    }

    ngOnDestroy() {
        this.threeService.destroy();
    }

}