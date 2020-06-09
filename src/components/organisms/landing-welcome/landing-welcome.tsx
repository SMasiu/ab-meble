import React from 'react'
import {
	WelcomeWrapper,
	CoverImageWrapper,
	WelcomeArticle,
	Heading,
	SubHeading,
	HeaderWrapper,
	WelcomeArticleWrapper,
	LineThrough,
	InfoSectionWrapper,
	InfoSection,
	LetterWrapperA,
	LetterWrapperB,
	Letter,
} from './landing-welcome.style'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingWelcome = () => (
	<WelcomeWrapper>
		<CoverImageWrapper></CoverImageWrapper>
		<WelcomeArticleWrapper>
			<WelcomeArticle>
				<LineThrough />
				<HeaderWrapper>
					<Heading>Meble</Heading>
					<SubHeading>na wymair</SubHeading>
				</HeaderWrapper>
				<InfoSectionWrapper>
					<LetterWrapperA>
						<Letter>A</Letter>
					</LetterWrapperA>
					<InfoSection>
						<WelcomeInfo
							heading={'Lorem, ipsum dolor.'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
							}
						></WelcomeInfo>
						<WelcomeInfo
							heading={'Lorem, ipsum dolor.'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
							}
						></WelcomeInfo>
					</InfoSection>
					<LetterWrapperB>
						<Letter>B</Letter>
					</LetterWrapperB>
				</InfoSectionWrapper>
			</WelcomeArticle>
		</WelcomeArticleWrapper>
	</WelcomeWrapper>
)
