import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { LandingWelcome } from 'components/organisms/landing-welcome/landing-welcome'
import { LandingProjects } from 'components/organisms/landing-projects/landing-projects'
import { LandingAbout } from 'components/organisms/landing-about/landing-about'
import { PageProps } from 'types/page.types'
import { LandingInspirations } from 'components/organisms/landing-inspirations/landing-inspirations'

const IndexPage: React.FC<PageProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Home" />
		<LandingWelcome />
		<LandingAbout />
		<LandingInspirations />
		<LandingProjects />
	</Layout>
)

export default IndexPage
