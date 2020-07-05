import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Realizations } from 'components/organisms/realizations/realizantions'

const RealizationsPage = () => (
	<Layout>
		<SEO title="Realizacje"></SEO>
		<Realizations />
	</Layout>
)

export default RealizationsPage
