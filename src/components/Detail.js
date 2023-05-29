import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	]

	return (
		<Stack gap="6rem" sx={{ flexDirection: { lg: 'row' }, p: '2rem', alignItems: 'center' }}>
			<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
			<Stack sx={{ gap: { lg: '3.5rem', sm: '2.5rem', xs: '2rem' } }}>
				<Typography
					sx={{ fontSize: { lg: '6.4rem', sm: '4rem', xs: '3rem' } }}
					fontWeight={700}
					textTransform="capitalize">
					{name}
				</Typography>
				<Typography sx={{ fontSize: { lg: '2.4rem', sm: '2rem', xs: '1.8rem' } }} color="#4F4C4C">
					Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one of the best
					{''}
					<br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
				</Typography>
				{extraDetail?.map(item => (
					<Stack key={item.name} direction="row" gap="2.5rem" alignItems="center">
						<Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '10rem', height: '10rem' }}>
							<img src={item.icon} alt={bodyPart} style={{ width: '5rem', height: '5rem' }} />
						</Button>
						<Typography textTransform="capitalize" sx={{ fontSize: { lg: '3rem', sm: '2.5rem', xs: '2rem' } }}>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	)
}

export default Detail
