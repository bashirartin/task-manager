const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectID()

// console.log(id.toHexString().length)
// console.log(id.id.length)

MongoClient.connect(connectionURL, { useNewUrlParser: true } , (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Bashir',
    //     age: 39
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.acknowledged)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Avina',
    //         age: 5
    //     },
    //     {
    //         name: 'Artin',
    //         age: 11
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert users')
    //     }

    //     console.log(result)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'sport',
    //         completed: false
    //     },
    //     {
    //         description: 'programming',
    //         completed: true
    //     },
    //     {
    //         description: 'english',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("62b73d6e10b941ffdf5c97e1") }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((errror, tasks) => {
    //     console.log(tasks)
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID("62b5f87bcccc6821686a1f8a")
    // }, {
    //     $set: {
    //         name: 'Avina',
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log('Result ', result)
    // }).catch((error) => {
    //     console.log('Error ', error)
    // })
    // db.collection('users').updateMany({
    //     name: 'Bashir'
    // }, {
    //     $set: {
    //         age: 25
    //     }
    // }).then((result) => {
    //     console.log('Result ', result)
    // }).catch((error) => {
    //     console.log('Error ', error)
    // })
    db.collection('users').deleteOne({
        name: 'Avina'
    }).then((result) => {
        console.log('Result ', result)
    }).catch((error) => {
        console.log('Error ', error)
    })
})