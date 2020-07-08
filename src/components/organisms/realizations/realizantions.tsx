import React from 'react'
import { RealizationsWrapper } from './realizations.style'
import { Realization } from 'components/molecules/realization/realization'
import { RealizationType } from 'types/realization.types'

const realizations: RealizationType[] = [
	{
		header: 'Lorem, ipsum.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum aliquam, maiores ut deserunt earum obcaecati voluptates sit itaque dolores aspernatur nesciunt repudiandae delectus consequatur quod distinctio. Obcaecati, distinctio id!`,
		image1: 'realizations/project1-image1.jpg',
		image2: 'realizations/project1-image2.jpg',
		image3: 'realizations/project1-image3.jpg',
		imageBackground: 'realizations/project-background1.jpg',
	},
	{
		header: 'Lorem, ipsum.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum aliquam, maiores ut deserunt earum obcaecati voluptates sit itaque dolores aspernatur nesciunt repudiandae delectus consequatur quod distinctio. Obcaecati, distinctio id!`,
		image1: 'realizations/project2-image1.jpg',
		image2: 'realizations/project2-image2.jpg',
		image3: 'realizations/project2-image3.jpg',
		imageBackground: 'realizations/project-background2.jpg',
	},
	{
		header: 'Lorem, ipsum.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum aliquam, maiores ut deserunt earum obcaecati voluptates sit itaque dolores aspernatur nesciunt repudiandae delectus consequatur quod distinctio. Obcaecati, distinctio id!`,
		image1: 'realizations/project3-image1.jpg',
		image2: 'realizations/project3-image2.jpg',
		image3: 'realizations/project3-image3.jpg',
		imageBackground: 'realizations/project-background3.jpg',
	},
]

export const Realizations = () => {
	return (
		<RealizationsWrapper>
			{realizations.map((r, i) => (
				<Realization realization={r} key={i} index={i} />
			))}
		</RealizationsWrapper>
	)
}
