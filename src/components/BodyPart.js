import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
	<Stack
		type="button"
		alignItems="center"
		justifyContent="center"
		className="bodyPart-card"
		sx={
			bodyPart === item
				? {
						borderTop: '0.4rem solid #FF2625',
						background: '#fff',
						width: '27rem',
						height: '28rem',
						cursor: 'pointer',
						gap: '5rem',
				  }
				: {
						background: '#fff',
						width: '27rem',
						height: '28rem',
						cursor: 'pointer',
						gap: '5rem',
				  }
		}
		onClick={() => {
			setBodyPart(item)
			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
		}}>
		<img src={Icon} alt="dumbbell" style={{ width: '4rem', height: '4rem' }} />
		<Typography fontSize="2.4rem" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
			{' '}
			{item}
		</Typography>
	</Stack>
)

export default BodyPart
