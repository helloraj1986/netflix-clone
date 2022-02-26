import './login.scss'
import { useState, useRef } from 'react'

const Login = () => {
	return (
		<div className='login'>
			<div className='top'>
				<div className='wrapper'>
					<img
						src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
						alt=''
						className='logo'
					/>
				</div>
			</div>
			<div className='container'>
				<form>
					<h1>Sign in</h1>
					<input type='email' placeholder='Email or Phone Number' />
					<input type='password' placeholder='Password' />
					<button className='login-btn'>Sign In</button>
					<span>
						New to Netflix ?<b>Sign up now.</b>
					</span>
					<small>
						This page is protected by Google reCAPTCHA to ensure
						you're not a bot. <b>Learn more.</b>
					</small>
				</form>
			</div>
		</div>
	)
}

export default Login
