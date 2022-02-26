const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//env configurstion
const dotenv = require('dotenv')
dotenv.config()

//REGISTER
router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
	})
	try {
		const user = await newUser.save()
		res.status(201).json(user)
	} catch (error) {
		res.status(500).json(error)
	}
})

//LOGIN
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		!user && res.status(401).json('No such email found in our database')

		//decrypt password from database and compare from user input password
		// Decrypt
		const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

		originalPassword !== req.body.password && res.status(401).json('Incorrect Password')
		//jwt
		const accessToken = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.SECRET_KEY,
			{ expiresIn: '5d' },
		)

		//only send userinfo not the password
		const { password, ...info } = user._doc

		//if password matches
		res.status(200).json({ ...info, accessToken })
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router
