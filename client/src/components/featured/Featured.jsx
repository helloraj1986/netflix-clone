import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'
const Featured = ({ type }) => {
	return (
		<div className='featured'>
			{type && (
				<div className='category'>
					<span>{type === 'movie' ? 'Movies' : 'Series'} </span>
					<select name='genre' id='genre'>
						<option>Genre</option>
						<option value='adventure'>Adventure</option>
						<option value='comedy'>comedy</option>
						<option value='crime'>crime</option>
						<option value='fantasy'>fantasy</option>
						<option value='historical'>historical</option>
						<option value='horror'>horror</option>
						<option value='romance'>romance</option>
						<option value='sci-fi'>sci-fi</option>
						<option value='thriller'>thriller</option>
						<option value='western'>western</option>
						<option value='animation'>animation</option>
						<option value='documentary'>documentary</option>
						<option value='drama'>drama</option>
					</select>
				</div>
			)}

			<img src='assets/featured-img.jpg' alt='test' />
			<div className='info'>
				<img src='assets/featured-img-title.jpg' alt='' />
				<span className='desc'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nisi odit dolores hic necessitatibus quae vero natus modi
					at! Omnis cumque maiores repellendus impedit minus nesciunt
					dolorum voluptas. Dolorem, autem porro?
				</span>
				<div className='buttons'>
					<button className='play'>
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className='more'>
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Featured
