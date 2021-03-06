import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PageProps } from 'types/page.types'
import { Vizualizations } from 'components/organisms/vizualizations/vizualizations'
import { vizualizationProps } from 'inputs/vizualization.props'

const ProjectsPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Projekty"></SEO>
		<Vizualizations vizualizations={vizualizationProps} />
	</Layout>
)

export default ProjectsPage
