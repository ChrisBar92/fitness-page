import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
	return (
		<Stack
			direction="row"
			justifyContent="space-around"
			sx={{ gap: { sm: '12rem', xs: '4rem' }, mt: { sm: '3rem', xs: '2rem' }, justifyContent: 'none' }}
			px="2rem">
			<Link to="/">
				<img src={Logo} alt="logo" style={{ width: '5rem', height: '5rem', margin: '0 2rem' }} />
			</Link>
			<Stack direction="row" gap="4rem" fontSize="2.4rem" alignItems="flex-end">
				<Link to="/" style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '3px solid #ff2625' }}>
					Home
				</Link>
				<a href="#exercise" style={{ textDecoration: 'none', color: '#3a1212' }}>
					Exercises
				</a>
			</Stack>
		</Stack>
	)
}

export default Navbar
