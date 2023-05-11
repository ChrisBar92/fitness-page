import { Typography, Stack } from '@mui/material'
import React from 'react'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodypart-card"
			sx={{
				borderTop: bodyPart === item ? '0.5rem solid #ff2625' : '',
				backgroundColor: '#fff',
				borderBottomLeftRadius: '2rem',
				width: '27rem',
				height: '28rem',
				cursor: 'pointer',
				gap: '4.5rem',
			}}>
			<img src={Icon} alt="dumbbell" styles={{ width: '4rem', height: '4rem' }} />
		</Stack>
	)
}

export default BodyPart
