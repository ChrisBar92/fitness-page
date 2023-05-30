import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
	<Box p="0 2rem" sx={{ mt: { lg: '10rem', xs: '0rem' } }}>
		<Typography variant="h3" mb="5rem" fontWeight={700}>
			Exercises that target the same muscle group
		</Typography>
		<Stack direction="row" sx={{  position: 'relative' }}>
			{targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
		</Stack>
		<Typography variant="h3" m="5rem 0 " fontWeight={700}>
			Exercises that use the same equipment
		</Typography>
		<Stack direction="row" sx={{ p: 2, position: 'relative' }}>
			{equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
		</Stack>
	</Box>
)

export default SimilarExercises
