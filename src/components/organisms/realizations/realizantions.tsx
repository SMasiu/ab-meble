import React from 'react'
import { RealizationsWrapper } from './realizations.style'
import { Realization } from 'components/molecules/realization/realization'
import { RealizationType } from 'types/realization.types'

const realizations: RealizationType[] = [
	{
		header: 'Lorem, ipsum.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum aliquam, maiores ut deserunt earum obcaecati voluptates sit itaque dolores aspernatur nesciunt repudiandae delectus consequatur quod distinctio. Obcaecati, distinctio id!`,
		image1: 'project1.jpg',
		image2: 'project2.jpg',
		image3: 'project5.jpg',
		imageBackground: 'welcome.jpg',
	},
	{
		header: 'Lorem, ipsum.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum aliquam, maiores ut deserunt earum obcaecati voluptates sit itaque dolores aspernatur nesciunt repudiandae delectus consequatur quod distinctio. Obcaecati, distinctio id!`,
		image1: 'project5.jpg',
		image2: 'project3.jpg',
		image3: 'project2.jpg',
		imageBackground: 'welcome.jpg',
	},
	{
		header: 'Lorem, ipsum.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum aliquam, maiores ut deserunt earum obcaecati voluptates sit itaque dolores aspernatur nesciunt repudiandae delectus consequatur quod distinctio. Obcaecati, distinctio id!`,
		image1: 'project2.jpg',
		image2: 'project4.jpg',
		image3: 'project1.jpg',
		imageBackground: 'welcome.jpg',
	},
]

export const Realizations = () => {
	return (
		<RealizationsWrapper>
			{realizations.map((r, i) => (
				<Realization
					realization={r}
					key={i}
					index={i}
					arrow={realizations.length !== i + 1}
				/>
			))}
		</RealizationsWrapper>
	)
}
