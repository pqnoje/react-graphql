const mongoose = require('mongoose')
const uri = "mongodb+srv://pqnoje:ws3KPcjkOiZ61OWB@cluster0.mya0c.mongodb.net/moviemaker?retryWrites=true&w=majority&appName=Cluster0";
const express = require("express")
const { createHandler } = require('graphql-http/lib/use/express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require("cors")

mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log('Error', err))

const app = express()


app.use(cors())
//app.all('/graphql', createHandler({ movieSchema }))
app.use('/graphql', createHandler({ schema: movieSchema, rootValue: resolvers }))
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(4000, () => console.log('Server is running on PORT 4000...'))
console.log("Running a GraphQL API server at http://localhost:4000/graphql")
console.log("Running a GraphQL API Playground server at http://localhost:4000/playground")