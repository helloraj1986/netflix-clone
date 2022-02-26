import './watch.scss'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'

const Watch = () => {
	return (
		<div className='watch'>
			<div className='back'>
				<ArrowBackOutlinedIcon />
				Home
			</div>
			<video
				className='vid'
				autoplay
				progress
				controls
				src='assets/spiderman-mov.mp4'
			></video>
		</div>
	)
}

export default Watch
