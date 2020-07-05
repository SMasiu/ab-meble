import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'

const FlatsRealizationsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Realizacje wnętrz mieszkalnych"></SEO>
		realizacie wnętrz mieszkalnych
	</Layout>
)

export default FlatsRealizationsPage
