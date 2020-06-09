import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { LandingWelcome } from 'components/organisms/landing-welcome/landing-welcome'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<LandingWelcome />
	</Layout>
)

export default IndexPage
