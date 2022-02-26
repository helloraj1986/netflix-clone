const router = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

//CREATE A NEW MOVIE
router.post('/', verify, async (req, res) => {
	if (req.user.isAdmin) {
		const newMovie = new Movie(req.body)
		try {
			const savedMovie = await newMovie.save()
			res.status(201).json(savedMovie)
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('You are not allowed to add movies')
	}
})

//UPDATE MOVIE
router.put('/:id', verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updatedMovie = await Movie.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true },
			)
			res.status(200).json(updatedMovie)
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('You are not allowed to edit movies')
	}
})
//DELETE MOVIE
router.delete('/:id', verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id)
			res.status(200).json('The movie has been deleted')
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('You are not allowed to delete movies')
	}
})

//GET A MOVIE
router.get('/findMovie/:id', verify, async (req, res) => {
	try {
		const oneMovie = await Movie.findById(req.params.id)
		res.status(201).json(oneMovie)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET A RANDOM MOVIE or SERIES
router.get('/random', verify, async (req, res) => {
	const type = req.query.type
	let item
	try {
		if (type === 'series') {
			item = await Movie.aggregate([
				//$match will serach for the entries in Movie model for series isSeries:true
				{ $match: { isSeries: true } },
				//this will get choose one seies from the list of series it find
				{ $sample: { size: 1 } },
			])
		} else {
			item = await Movie.aggregate([
				{ $match: { isSeries: false } },
				{ $sample: { size: 1 } },
			])
		}
		res.status(200).json(item)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET ALL MOVIES
router.get('/', verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const movies = await Movie.find()
			res.status(200).json(movies.reverse()) //reverse used to see the latest movies that has been added to the database
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('You are not allowed to delete movies')
	}
})

module.exports = router
