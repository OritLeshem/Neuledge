"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Song = exports.Playlist = void 0;
const engine_1 = require("@neuledge/engine");
/**
 * This is the category state.
 */
let Playlist = class Playlist {
    static $name = 'Playlist';
    static $id = { fields: ['+id'], auto: 'increment' };
    static $scalars = () => ({
        id: { type: engine_1.$.scalars.Integer, index: 1 },
        name: { type: engine_1.$.scalars.String, index: 2 },
        imgUrl: { type: engine_1.$.scalars.URL, index: 3 },
        tags: { type: [engine_1.$.scalars.String], index: 4 },
        createdBy: { type: [User], index: 5 },
    });
    static $where;
    static $unique;
    static $filter;
    static $relations = () => ({
        createdBy: { states: [User] },
        songs: { states: [Song], list: true, reference: 'playlist' },
    });
    id;
    name;
    imgUrl;
    tags;
    createdBy;
};
Playlist = __decorate([
    engine_1.$.State()
], Playlist);
exports.Playlist = Playlist;
let Song = class Song {
    static $name = 'Song';
    static $id = { fields: ['+id'], auto: 'increment' };
    static $scalars = () => ({
        id: { type: engine_1.$.scalars.Integer, index: 1 },
        title: { type: engine_1.$.scalars.String, index: 2 },
        imgUrl: { type: engine_1.$.scalars.URL, index: 3 },
        artist: { type: engine_1.$.scalars.String, index: 4 },
        playlist: { type: [Playlist], index: 5 },
    });
    static $where;
    static $unique;
    static $filter;
    static $relations = () => ({
        playlist: { states: [Playlist] },
    });
    id;
    title;
    imgUrl;
    artist;
    playlist;
};
Song = __decorate([
    engine_1.$.State()
], Song);
exports.Song = Song;
let User = class User {
    static $name = 'User';
    static $id = { fields: ['+id'], auto: 'increment' };
    static $scalars = () => ({
        id: { type: engine_1.$.scalars.Integer, index: 1 },
        username: { type: engine_1.$.scalars.String, index: 2 },
    });
    static $where;
    static $unique;
    static $filter;
    static $indexes = {
        username: { fields: ['+username'], unique: true },
    };
    id;
    username;
};
User = __decorate([
    engine_1.$.State()
], User);
exports.User = User;
//# sourceMappingURL=states.codegen.js.map