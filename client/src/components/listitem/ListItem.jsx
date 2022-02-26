import './listItem.scss'
import { Add, PlayArrow, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons'
import { useState } from 'react'

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false)
	const trailer = 'assets/spiderman-mov.mp4'
	return (
		<div
			className='listItem'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
		>
			<img
				src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OFoRqbDPxlzsFGIdGiuc4QHaEK%26pid%3DApi&f=1'
				alt=''
			/>

			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className='itemInfo'>
						<div className='icons'>
							<PlayArrow className='icon' />
							<Add className='icon' />
							<ThumbUpAlt className='icon' />
							<ThumbDownAlt className='icon' />
						</div>
						<div className='itemInfoTop'>
							<span>1 hour 14 mins</span>
							<span className='age-limit'>+16</span>
							<span>1999</span>
						</div>
						<div className='desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempore, illo nisi iste quos eos veritatis
							qui. Facilis ipsum autem similique?
						</div>
						<div className='genre'>Action</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ListItem
