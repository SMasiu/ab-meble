import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { Products } from 'components/organisms/products/products'

const HomeProductsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Produkty dom"></SEO>
		<Products />
	</Layout>
)

export default HomeProductsPage
