import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
	const [exercises, setExercises] = useState([])
	const [bodyPart, setBodypart] = useState('all')

	return (
		<Box>
			<HeroBanner />
			<SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodypart} 
      />
			<Exercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodypart}
       />
		</Box>
	)
}

export default Home
