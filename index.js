const express = require('express')
const cors = require('cors')
const monk = require('monk')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const url = 'mongodb://newuser:newuser1@clusterproject-shard-00-00-e2ua7.mongodb.net:27017,clusterproject-shard-00-01-e2ua7.mongodb.net:27017,clusterproject-shard-00-02-e2ua7.mongodb.net:27017/users?ssl=true&replicaSet=ClusterProject-shard-0&authSource=admin&retryWrites=true'


const db = monk(url)

const users = db.get('collection-caleb')
//the collection in Mongo is our array of objects
//also currently the most recent version of Mongo server does not seem to work
//correctly? You will need to use the version right before.



app.use(cors())
app.use((bodyParser.json()))


app.post('/', async (req, res) => {
//defined app as express, so express is posting upon request at the / path
    const results = await users.insert(req.body)
//declaring a constant results to call our result of the post later down,
//we then await our function to take users, which is our variable db ----(monk connecting to our database)
//getting our collection(our array of objects) we then go to insert into our array whatever our 
//user is requesting. the req.body is just passing in our request's (our post request) body 
    res.status(200).send(results)
//this line is then just saying for resolution, our status will be 200 and then we want to send
//our results back to the UI :)
} )

app.get('/admin', async (req, res) => {
    const results = await users.find()
    res.status(200).send(results)
} )


app.delete('/admin', async (req, res) => {
    const results = await users.remove(req.params)
    res.status(200).send(results)
} )













app.listen(port, ()=> console.log('hellooooooo'))