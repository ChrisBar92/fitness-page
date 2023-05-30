import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [exercisesPerPage] = useState(9)

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = []

			if (bodyPart === 'all') {
				exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				)
			}

			setExercises(exercisesData)
		}

		fetchExercisesData()
	}, [bodyPart])

	// Pagination
	const indexOfLastExercise = currentPage * exercisesPerPage
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
	const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

	const paginate = (e, value) => {
		setCurrentPage(value)

		window.scrollTo({ top: 1800, behavior: 'smooth' })
	}

	if (!currentExercises.length) return <Loader />

	return (
		<Box id="exercises" sx={{ mt: { lg: '11rem' } }} mt="5rem" p="2rem">
			<Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '4.4rem', xs: '3rem' } }} mb="4.6rem">
				Showing Results
			</Typography>
			<Stack direction="row" sx={{ gap: { lg: '11rem', xs: '5rem' } }} flexWrap="wrap" justifyContent="center">
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack sx={{ mt: { lg: '10rem', xs: '7rem' } }} alignItems="center">
				{exercises.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	)
}

export default Exercises
