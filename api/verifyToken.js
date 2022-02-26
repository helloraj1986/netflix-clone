const jwt = require('jsonwebtoken')
//env configurstion
const dotenv = require('dotenv')
dotenv.config()

function verify(req, res, next) {
	const authHeader = req.headers.token
	if (authHeader) {
		const token = authHeader.split(' ')[1]
		jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
			if (err) {
				res.status(403).json('Token is not valid')
			}
			req.user = user
			next()
		})
	} else {
		return res.status(401).json("You're not authenticated")
	}
}

module.exports = verify
