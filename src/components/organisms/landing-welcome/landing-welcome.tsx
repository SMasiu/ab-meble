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
	WelcomeArticleOuterWrapper,
	WelcomeLineThrough,
} from './landing-welcome.style'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingWelcome: React.FC = () => (
	<WelcomeWrapper>
		<WelcomeArticleOuterWrapper>
			<WelcomeArticleWrapper>
				<WelcomeArticle>
					<WelcomeLineThrough />
					<HeaderWrapper>
						<Heading>Meble</Heading>
						<SubHeading>biurowe</SubHeading>
					</HeaderWrapper>
					<InfoSectionWrapper>
						<LetterWrapperA>
							<Letter>A</Letter>
						</LetterWrapperA>
						<InfoSection>
							<WelcomeInfo
								heading={'Produkty biuro'}
								paragraph={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
								}
								discover={'Zobacz więcej'}
								linkTo={'/produkty-dom'}
							></WelcomeInfo>
							<WelcomeInfo
								heading={'Produkty dom'}
								paragraph={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
								}
								discover={'Zobacz więcej'}
								linkTo={'/produkty-biuro'}
							></WelcomeInfo>
						</InfoSection>
						<LetterWrapperB>
							<Letter>B</Letter>
						</LetterWrapperB>
					</InfoSectionWrapper>
				</WelcomeArticle>
			</WelcomeArticleWrapper>
		</WelcomeArticleOuterWrapper>
	</WelcomeWrapper>
)
