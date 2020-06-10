import React from 'react'
import {
	LandingProjectsWrapper,
	ItemsSectionWrapperLeft,
	ItemsSectionWrapperRight,
	ContentWrapper,
	ImageWrapper,
	ArticleWrapper,
	ArticleHeading,
	LandingProjectsOuterWrapper,
	ProjectsBackground,
} from './landing-projects.styles'
import { LineThrough } from 'components/atoms/line-through/line-through'
import { ThemeColorNames } from 'types/theme.types'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingProjects = () => (
	<LandingProjectsOuterWrapper>
		<ProjectsBackground />
		<LandingProjectsWrapper>
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
		</LandingProjectsWrapper>
	</LandingProjectsOuterWrapper>
)
