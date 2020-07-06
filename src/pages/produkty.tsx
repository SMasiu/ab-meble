import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { ProductsDevider } from 'components/organisms/products-devider/products-devider'

const ProductsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Produkty"></SEO>
		<ProductsDevider />
	</Layout>
)

export default ProductsPage
