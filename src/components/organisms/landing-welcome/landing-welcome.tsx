import React from 'react'
import {
	WelcomeWrapper,
	WelcomeArticle,
	Heading,
	SubHeading,
	HeaderWrapper,
	WelcomeArticleWrapper,
	InfoSectionWrapper,
	InfoSection,
	LetterWrapperA,
	LetterWrapperB,
	Letter,
	MoveToNextWrapper,
	WelcomeArticleOuterWrapper,
} from './landing-welcome.style'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'
import { LineThrough } from 'components/atoms/line-through/line-through'

export const LandingWelcome: React.FC = () => (
	<WelcomeWrapper>
		<WelcomeArticleOuterWrapper>
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
		</WelcomeArticleOuterWrapper>
	</WelcomeWrapper>
)
