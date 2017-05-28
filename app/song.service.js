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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var SongService = (function () {
    function SongService(http) {
        this.http = http;
        this.songsUrl = '/api/songs.json'; // URL to web API
    }
    //getSongs(): Promise<Song[]> {
    //return Promise.resolve(SONGS);
    //  }
    SongService.prototype.getSong = function (name) {
        return this.getSongs().map(function (songs) { return songs.find(function (song) { return song.name === name; }); });
    };
    SongService.prototype.getSongs = function () {
        return this.http.get(this.songsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SongService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SongService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return SongService;
}());
SongService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SongService);
exports.SongService = SongService;
//# sourceMappingURL=song.service.js.map