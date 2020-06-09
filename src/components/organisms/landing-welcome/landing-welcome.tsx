import React from 'react'
import {
	WelcomeWrapper,
	CoverImageWrapper,
	WelcomeArticle,
	Heading,
	SubHeading,
	HeaderWrapper,
} from './landing-welcome.style'

export const LandingWelcome = () => (
	<WelcomeWrapper>
		<CoverImageWrapper></CoverImageWrapper>
		<WelcomeArticle>
			<HeaderWrapper>
				<Heading>Meble</Heading>
				<SubHeading>na wymair</SubHeading>
			</HeaderWrapper>
		</WelcomeArticle>
	</WelcomeWrapper>
)
