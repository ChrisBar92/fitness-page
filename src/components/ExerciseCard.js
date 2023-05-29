import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => (
	<Link className="exercise-card" to={`/exercise/${exercise.id}`}>
		<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
		<Stack direction="row">
			<Button
				sx={{
					ml: '2rem',
					color: '#fff',
					background: '#FFA9A9',
					fontSize: '1.4rem',
					borderRadius: '2rem',
					textTransform: 'capitalize',
				}}>
				{exercise.bodyPart}
			</Button>
			<Button
				sx={{
					ml: '2rem',
					color: '#fff',
					background: '#FCC757',
					fontSize: '1.4rem',
					borderRadius: '2rem',
					textTransform: 'capitalize',
				}}>
				{exercise.target}
			</Button>
		</Stack>
		<Typography
			ml="2rem"
			color="#000"
			fontWeight="bold"
			sx={{ fontSize: { lg: '2.4rem', xs: '2rem' } }}
			mt="1.1rem"
			pb="1rem"
			textTransform="capitalize">
			{exercise.name}
		</Typography>
	</Link>
)

export default ExerciseCard
