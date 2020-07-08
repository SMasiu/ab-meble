import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { Devider } from 'components/organisms/products-devider/devider'

const RealizationsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Realizacje"></SEO>
		<Devider
			header="Realizacje"
			article={{
				first: {
					header: 'Wnętrz biurowych',
					paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				quibusdam!`,
					imageUrl: 'project3.jpg',
					linkTo: '/realizacje-wnętrz-biurowych',
				},
				second: {
					header: 'Pomieszczeń mieszkalnych',
					paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				quibusdam!`,
					imageUrl: 'project4.jpg',
					linkTo: '/realizacje-wnętrz-mieszkalnych',
				},
			}}
		/>
	</Layout>
)

export default RealizationsPage
