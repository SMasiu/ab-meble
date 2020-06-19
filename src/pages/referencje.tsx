import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { References } from 'components/organisms/references/references'

const ReferencesPage = () => (
	<Layout>
		<SEO title="Referencje" />
		<References />
	</Layout>
)

export default ReferencesPage
