import './register.scss'
import { useState, useRef } from 'react'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const emailRef = useRef('')
	const passRef = useRef('')

	const handleStart = () => {
		setEmail(emailRef.current.value)
	}

	const handleFinish = () => {
		setPassword(passRef.current.value)
	}
	return (
		<div className='register'>
			<div className='top'>
				<div className='wrapper'>
					<img
						src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
						alt=''
						className='logo'
					/>
					<button className='login-btn'>Sign In</button>
				</div>
			</div>
			<div className='container'>
				<h1>Unlimited movies, TV Shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>

				<p>
					Ready to wacth? Enter your email to create or restart your
					membership.
				</p>
				{!email ? (
					<div className='input'>
						<input
							type='email'
							placeholder='Email address'
							ref={emailRef}
						/>
						<button className='register-btn' onClick={handleStart}>
							Get Started
						</button>
					</div>
				) : (
					<form className='input'>
						<input
							type='password'
							placeholder='Enter Password'
							ref={passRef}
						/>
						<button className='register-btn' onClick={handleFinish}>
							Start
						</button>
					</form>
				)}
			</div>
		</div>
	)
}

export default Register
