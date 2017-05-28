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
var song_service_1 = require("./song.service");
var StatisticsComponent = (function () {
    function StatisticsComponent(songService) {
        this.songService = songService;
        this.songs = [];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songService.getSongs()
            .subscribe(function (songs) { return _this.songs = songs.slice(0, 5); });
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-statistics',
        templateUrl: 'statistics.component.html',
        styleUrls: ['statistics.component.css']
    }),
    __metadata("design:paramtypes", [song_service_1.SongService])
], StatisticsComponent);
exports.StatisticsComponent = StatisticsComponent;
//# sourceMappingURL=statistics.component.js.map