import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { LandingWelcome } from 'components/organisms/landing-welcome/landing-welcome'
import { LandingAbout } from 'components/organisms/landing-about/landing-about'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<LandingWelcome />
		<LandingAbout />
	</Layout>
)

export default IndexPage
