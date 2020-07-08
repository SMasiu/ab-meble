import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { Devider } from 'components/organisms/products-devider/devider'

const ProductsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Produkty"></SEO>
		<Devider
			header="Produkty"
			article={{
				first: {
					header: 'Biuro',
					paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				quibusdam!`,
					imageUrl: 'project3.jpg',
					linkTo: '/produkty-biuro',
				},
				second: {
					header: 'Dom',
					paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				quibusdam!`,
					imageUrl: 'project1.jpg',
					linkTo: '/produkty-dom',
				},
			}}
		/>
	</Layout>
)

export default ProductsPage
