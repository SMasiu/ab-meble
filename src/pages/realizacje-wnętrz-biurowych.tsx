import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { Realizations } from 'components/organisms/realizations/realizantions'

const OfficesRealizationsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Realizacje wnętrz biurowych"></SEO>
		<Realizations />
	</Layout>
)

export default OfficesRealizationsPage
