const express = require('express')
const app = express()
const mongoose = require('mongoose')

//env configurstion
const dotenv = require('dotenv')
dotenv.config()
//router
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')

//connect to mongodb using mongoose
mongoose
	.connect(process.env.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('db connection successful'))
	.catch((err) => console.log(err))
//to accept json files by express
app.use(express.json())

//define all route
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

app.listen(8800, () => {
	console.log('backend server is running')
})
