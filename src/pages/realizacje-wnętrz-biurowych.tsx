import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { Realizations } from 'components/organisms/realizations/realizantions'
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

const OfficesRealizationsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Realizacje wnętrz biurowych"></SEO>
		<Realizations realizations={realizations} />
	</Layout>
)

export default OfficesRealizationsPage
