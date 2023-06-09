import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/fitness-banner.jpg'

const HeroBanner = () => {
	return (
		<Box
			sx={{
				textAlign: {lg:'left', xs: 'center' },
				mt: { lg: '21rem', xs: '7rem' },
				ml: { sm: '5rem' },
				mb: { lg: '31rem' },
			}}
			position="relative"
			p="2rem">
			<Typography color="#ff2625" fontWeight="600" fontSize="3.6rem">
				SweatGym - Fitness Club
			</Typography>
			<Typography fontWeight={700} sx={{ fontSize: { lg: '4.4rem', xs: '3.6rem' } }} mb="2.5rem" mt="3rem">
				Sweat, Smile <br /> and Repeat
			</Typography>
			<Typography fontSize="2.2rem" lineHeight="3.5rem" mb={4}>
				Check out the most effective exercises
			</Typography>
			<Button
				variant="contained"
				color="error"
				href="#exercises"
				sx={{ fontSize: '1.6rem', backgroundColor: '#ff2625', padding: '1rem 2rem' }}>
				Explore Exercises
			</Button>

			<img src={HeroBannerImage} alt="hero banner" className="hero-banner-img" />
		</Box>
	)
}

export default HeroBanner
