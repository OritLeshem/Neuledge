const dbService = require('../services/db.service')
const logger = require('../services/logger.service')
const utilService = require('../services/util.service')
const ObjectId = require('mongodb').ObjectId

export interface Song{
    id?:string,
    title:string,
    imgUrl:string,
}

export interface User{
    _id:string,
    username:string,
    password?:string,
    createdAt:string,
}

export interface Playlist{
    _id:string,
    name: string,
    tags: string[],
    createdBy: User
    imgUrl: string,
    songs: Song[]
}

async function query() {
    try {
        const collection = await dbService.getCollection('playlist')
        var playlists = await collection.find().toArray()
        return playlists
    } catch (err) {
        logger.error('cannot find playlists', err)
        throw err
    }
}

async function getById(playlistId:string) {
    try {
        const collection = await dbService.getCollection('playlist')
        const playlist = await collection.findOne({ _id: new ObjectId(playlistId) });
        return playlist
    } catch (err) {
        logger.error(`while finding playlist ${playlistId}`, err)
        throw err
    }
}

async function remove(playlistId:string) {
    try {
        const collection = await dbService.getCollection('playlist')
        // await collection.deleteOne({ _id: ObjectId(playlistId) })
        await collection.deleteOne({ _id: new ObjectId(playlistId) });

        return playlistId
    } catch (err) {
        logger.error(`cannot remove playlist ${playlistId}`, err)
        throw err
    }
}

async function add(playlist:Playlist) {
    try {

        const collection = await dbService.getCollection('playlist')
        await collection.insertOne(playlist)
        return playlist
    } catch (err) {
        logger.error('cannot insert playlist', err)
        throw err
    }
}

async function update(playlist:Playlist) {
    try {
        const playlistToSave = {
            name: playlist.name,
            imgUrl: playlist.imgUrl,
            songs: playlist.songs,
            createdBy: playlist.createdBy,

        }
        const collection = await dbService.getCollection('playlist')
        await collection.updateOne({ _id: new ObjectId(playlist._id) }, { $set: playlistToSave })
        return playlist
    } catch (err) {
        logger.error(`cannot update playlist ${playlist._id}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,

}