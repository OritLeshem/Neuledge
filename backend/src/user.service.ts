const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
 import  { Playlist, User, Song }from'./playlist.service'
// export interface Song{
//   id?:string,
//   title:string,
//   imgUrl:string,
// }

// export interface User{
//   _id:string,
//   username:string,
//   password?:string,
//   createdAt:string,
// }

// export interface Playlist{
//   _id:string,
//   name: string,
//   tags: string[],
//   createdBy: User
//   imgUrl: string,
//   songs: Song[]
//  }
module.exports = {
    query,
    getById,
    getByUsername,
    add
}

async function query() {
    try {
        const collection = await dbService.getCollection('user')
        var users = await collection.find().toArray()
        users = users.map((user:User)=> {
            delete user.password
            user.createdAt = new ObjectId(user._id).getTimestamp()
            return user
        })
        return users
    } catch (err) {
        logger.error('cannot find users', err)
        throw err
    }
}

async function getById(userId:string) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ _id: new ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        logger.error(`while finding user by id: ${userId}`, err)
        throw err
    }
}

async function getByUsername(username:string) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        logger.error(`while finding user by username: ${username}`, err)
        throw err
    }
}


async function add(user:User) {
    try {
        const userToAdd = {
            username: user.username,
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot add user', err)
        throw err
    }
}

