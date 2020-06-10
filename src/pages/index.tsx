import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { LandingWelcome } from 'components/organisms/landing-welcome/landing-welcome'
import { LandingProjects } from 'components/organisms/landing-projects/landing-projects'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<LandingWelcome />
		<LandingProjects />
	</Layout>
)

export default IndexPage
