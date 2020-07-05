import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'

const OfficeProductsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Produkty biuro"></SEO>
		produkty producenci
	</Layout>
)

export default OfficeProductsPage
