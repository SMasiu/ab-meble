import React from 'react'
import {
	LandingProjectsOuterWrapper,
	LandingProjectsWrapper,
	ImageNameWrapper1,
	ImageNameWrapper2,
	ImageNameWrapper3,
	ImageWrapper1,
	ImageWrapper2,
	ArticleWrapper1,
	ArticleWrapper2,
	NameHeading,
	Image,
	ImageContentWrapper1,
	ImageContentWrapper2,
	ProjectsBackground,
	LineThroughLeft,
	LineThroughRight,
} from './landing-projects.styles'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingProjects = () => (
	<LandingProjectsOuterWrapper>
		<ProjectsBackground />
		<LandingProjectsWrapper>
			<LineThroughLeft />
			<LineThroughRight />
			<ImageNameWrapper1>
				<NameHeading>Biura</NameHeading>
				<Image path="project3.jpg" />
			</ImageNameWrapper1>
			<ImageNameWrapper2>
				<NameHeading>Domy</NameHeading>
				<Image path="project4.jpg" />
			</ImageNameWrapper2>
			<ImageNameWrapper3>
				<NameHeading>Salony</NameHeading>
				<Image path="project5.jpg" />
			</ImageNameWrapper3>
			<ImageWrapper1>
				<ImageContentWrapper1>
					<Image path="project1.jpg" />
				</ImageContentWrapper1>
			</ImageWrapper1>
			<ImageWrapper2>
				<ImageContentWrapper2>
					<Image path="project2.jpg" />
				</ImageContentWrapper2>
			</ImageWrapper2>
			<ArticleWrapper1>
				<WelcomeInfo
					heading={'Lorem, ipsum dolor.'}
					paragraph={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
					}
					discover={'Discover'}
				></WelcomeInfo>
			</ArticleWrapper1>
			<ArticleWrapper2>
				<WelcomeInfo
					heading={'Lorem, ipsum dolor.'}
					paragraph={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
					}
					discover={'Discover'}
				></WelcomeInfo>
			</ArticleWrapper2>
		</LandingProjectsWrapper>
	</LandingProjectsOuterWrapper>
)
