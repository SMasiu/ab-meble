import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { References } from 'components/organisms/references/references'
import { PageProps } from 'types/page.types'

const ReferencesPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Referencje" />
		<References />
	</Layout>
)

export default ReferencesPage
