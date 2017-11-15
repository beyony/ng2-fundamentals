import {Injectable} from "@angular/core";

declare let THREE: any;
declare let OrbitControls: any;
declare let initThree: any;


Injectable();

export class ThreeService {

    controls: any;
    mesh: any;
    threeControls: any;


    // constructor() {
    //     console.log("SERVICE CONSTRUCT!");
    //     var scope = this;
    //     setTimeout(function () {
    //         scope.loadThatShit(scope)
    //     }, 1000);
    // }

    private loadThatShit(scope, start) {
        scope.threeControls = new initThree('#canvas', '.tab-content-container', null, null, start);
        //scope.controls = OrbitControls(THREE);
        scope.mesh = this.threeControls.getMesh();
        scope.mesh.scale.x = 15;
        scope.mesh.scale.y = 15;
        scope.mesh.scale.z = 15;

    }

    init(start: boolean) {
        this.loadThatShit(this, start);
    }

    fitCanvasSize() {
        this.threeControls.forceRefit();
    }

    start() {
        this.threeControls.start();
    }

    pause() {
        this.threeControls.pause();
    }

    destroy() {
        this.threeControls.pause();
    }


}