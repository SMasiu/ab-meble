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
	HalfLineThrough,
	ProjectsBackgroundWrapper,
	ContentWrapperRightImages,
	ContentWrapperLeftNames,
	ContentWrapperRightDesc,
	LeftLineThrough,
} from './landing-projects.styles'
import { ThemeColorNames } from 'types/theme.types'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingProjects = () => (
	<LandingProjectsOuterWrapper>
		<ProjectsBackgroundWrapper>
			<ProjectsBackground />
		</ProjectsBackgroundWrapper>
		<LandingProjectsWrapper>
			<ItemsSectionWrapperLeft>
				<ContentWrapperLeftNames>
					<ArticleWrapper>
						<ArticleHeading>Biura</ArticleHeading>
					</ArticleWrapper>
					<ArticleWrapper>
						<ArticleHeading>Domy</ArticleHeading>
					</ArticleWrapper>
					<ArticleWrapper>
						<ArticleHeading>Salony</ArticleHeading>
					</ArticleWrapper>
				</ContentWrapperLeftNames>
				<ContentWrapper>
					<LeftLineThrough color={ThemeColorNames.light300} />
					<ImageWrapper url={'project3.jpg'}></ImageWrapper>
					<ImageWrapper url={'project4.jpg'}></ImageWrapper>
					<ImageWrapper url={'project5.jpg'}></ImageWrapper>
				</ContentWrapper>
			</ItemsSectionWrapperLeft>
			<ItemsSectionWrapperRight>
				<ContentWrapperRightImages>
					<HalfLineThrough color={ThemeColorNames.light300} />
					<ImageWrapper url={'project1.jpg'}></ImageWrapper>
					<ImageWrapper url={'project2.jpg'}></ImageWrapper>
				</ContentWrapperRightImages>
				<ContentWrapperRightDesc>
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
				</ContentWrapperRightDesc>
			</ItemsSectionWrapperRight>
		</LandingProjectsWrapper>
	</LandingProjectsOuterWrapper>
)
