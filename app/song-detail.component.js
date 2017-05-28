"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var song_service_1 = require("./song.service");
require("rxjs/add/operator/switchMap");
var SongDetailComponent = (function () {
    function SongDetailComponent(songService, route, location) {
        this.songService = songService;
        this.route = route;
        this.location = location;
    }
    SongDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.songService.getSong(params['name']); })
            .subscribe(function (song) { return _this.song = song; });
    };
    SongDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SongDetailComponent;
}());
SongDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-song-detail',
        templateUrl: 'song-detail.component.html',
        styleUrls: ['song-detail.component.css']
    }),
    __metadata("design:paramtypes", [song_service_1.SongService,
        router_1.ActivatedRoute,
        common_1.Location])
], SongDetailComponent);
exports.SongDetailComponent = SongDetailComponent;
//# sourceMappingURL=song-detail.component.js.map