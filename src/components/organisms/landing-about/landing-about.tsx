import React from 'react'
import {
	LandingAboutWrapper,
	ItemsSectionWrapperLeft,
	ItemsSectionWrapperRight,
	ContentWrapper,
	ImageWrapper,
	ArticleWrapper,
	ArticleHeading,
	LandingAboutOuterWrapper,
	AboutBackground,
} from './landing-about.styles'
import { LineThrough } from 'components/atoms/line-through/line-through'
import { ThemeColorNames } from 'types/theme.types'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingAbout = () => (
	<LandingAboutOuterWrapper>
		<AboutBackground />
		<LandingAboutWrapper>
			<ItemsSectionWrapperLeft>
				<ContentWrapper>
					<ArticleWrapper>
						<ArticleHeading>Biura</ArticleHeading>
					</ArticleWrapper>
					<ArticleWrapper>
						<ArticleHeading>Domy</ArticleHeading>
					</ArticleWrapper>
					<ArticleWrapper>
						<ArticleHeading>Salony</ArticleHeading>
					</ArticleWrapper>
				</ContentWrapper>
				<ContentWrapper>
					<LineThrough color={ThemeColorNames.light300} />
					<ImageWrapper url={'about3.jpg'}></ImageWrapper>
					<ImageWrapper url={'about4.jpg'}></ImageWrapper>
					<ImageWrapper url={'about5.jpg'}></ImageWrapper>
				</ContentWrapper>
			</ItemsSectionWrapperLeft>
			<ItemsSectionWrapperRight>
				<ContentWrapper>
					<LineThrough color={ThemeColorNames.light300} />
					<ImageWrapper url={'about1.jpg'}></ImageWrapper>
					<ImageWrapper url={'about2.jpg'}></ImageWrapper>
				</ContentWrapper>
				<ContentWrapper>
					<ArticleWrapper>
						<WelcomeInfo
							heading={'Lorem, ipsum dolor.'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
							}
							discover={'Discover'}
						></WelcomeInfo>
					</ArticleWrapper>
					<ArticleWrapper>
						<div></div>
					</ArticleWrapper>
					<ArticleWrapper>
						<WelcomeInfo
							heading={'Lorem, ipsum dolor.'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
							}
							discover={'Discover'}
						></WelcomeInfo>
					</ArticleWrapper>
				</ContentWrapper>
			</ItemsSectionWrapperRight>
		</LandingAboutWrapper>
	</LandingAboutOuterWrapper>
)
