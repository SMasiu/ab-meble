import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'

const HomeProductsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Produkty dom"></SEO>
		produkty zdiecia opis
	</Layout>
)

export default HomeProductsPage
