import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'

const NotFoundPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
	</Layout>
)

export default NotFoundPage
