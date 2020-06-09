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
	MoveToNextWrapper,
} from './landing-welcome.style'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'

export const LandingWelcome: React.FC = () => (
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
							discover={'Discover'}
						></WelcomeInfo>
						<WelcomeInfo
							heading={'Lorem, ipsum dolor.'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
							}
							discover={'Discover'}
						></WelcomeInfo>
					</InfoSection>
					<LetterWrapperB>
						<Letter>B</Letter>
					</LetterWrapperB>
				</InfoSectionWrapper>
				<MoveToNextWrapper>
					<ArrowButton size="23px" name="down-arrow"></ArrowButton>
				</MoveToNextWrapper>
			</WelcomeArticle>
		</WelcomeArticleWrapper>
	</WelcomeWrapper>
)
