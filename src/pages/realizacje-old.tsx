import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Realizations } from 'components/organisms/realizations/realizantions'
import { PageProps } from 'types/page.types'

const RealizationsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Realizacje"></SEO>
		<Realizations />
	</Layout>
)

export default RealizationsPage
