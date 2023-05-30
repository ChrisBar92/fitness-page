import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => (
	<Box mt="8rem" bgcolor="#FFF3F4">
		<Stack gap="4rem" sx={{ alignItems: 'center' }} flexWrap="wrap" px="4rem" pt="2.4rem">
			<img src={Logo} alt="logo" style={{ width: '8rem', height: '6rem' }} />
		</Stack>
		<Typography variant="h5" sx={{ fontSize: { lg: '2.8rem', xs: '2rem' } }} mt="2rem" textAlign="center" pb="4rem">
			Made by Krzysztof Bartkiewicz
		</Typography>
	</Box>
)

export default Footer
