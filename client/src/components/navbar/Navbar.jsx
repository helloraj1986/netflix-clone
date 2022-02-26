import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useState } from 'react'
const Navbar = () => {
	// usestate for making navbar change color on scrolling
	const [isScrolled, setIsScrolled] = useState(false)
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true)
		return () => (window.onscroll = null)
	}
	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container'>
				<div className='left'>
					<img
						src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
						alt=''
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='right'>
					<Search className='icon' />
					<span>KID</span>
					<Notifications className='icon' />
					<img
						src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1loUCydWWGsT0sTeiRJVAgHaEK%26pid%3DApi&f=1'
						alt=''
					/>

					<div className='profile'>
						<ArrowDropDown className='icon' />
						{/* by default options div shall be hidden and can be seen only on hover */}
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
