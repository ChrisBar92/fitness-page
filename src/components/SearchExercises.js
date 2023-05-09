import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'

const SearchExercises = () => {
	const [search, setSearch] = useState('')

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

			const searchedExercises = exercisesData.filter(
				item =>
					item.name.toLowerCase().includes(search) ||
					item.target.toLowerCase().includes(search) ||
					item.equipment.toLowerCase().includes(search) ||
					item.bodyPart.toLowerCase().includes(search)
			)

			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

			setSearch('')
			setExercises(searchedExercises)
		}
	}

	return (
		<Stack alignItems="center" mt="3.5rem" justifyContent="center" p="2rem">
			<Typography fontWeight={700} sx={{ fontSize: { lg: '4.5rem', xs: '3rem' } }} mb="5rem" textAlign="center">
				Awesome Exercises You <br />
				Should Know
			</Typography>
			<box position="relative" mb="7rem">
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '0.5rem' },
						width: { lg: '80rem', xs: '35rem' },
						backgroundColor: '#fff',
						borderRadius: '4rem',
					}}
					height="7.5rem"
					value={search}
					onChange={e => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Exercises"
					type="text"
				/>
				<Button
					className="search-btn"
					sx={{
						bgcolor: '#ff2625',
						color: '#fff',
						textTransform: 'none',
						width: { lg: '18rem', xs: '8rem' },
						fontSize: { lg: '2rem', xs: '1.4rem' },
						height: '5.5rem',
						position: 'absolute',
						right: '0',
					}}
					onClick={handleSearch}>
					Search
				</Button>
			</box>
		</Stack>
	)
}

export default SearchExercises
