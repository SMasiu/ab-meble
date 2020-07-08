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
	ArticleWrapper3,
	NameHeading,
	Image,
	ImageContentWrapper1,
	ImageContentWrapper2,
	ProjectsBackground1,
	ProjectsBackground2,
	LineThroughLeft,
	LineThroughRight,
	MobileBackground,
	NameSubHeading,
	NameHeadingWrapper,
} from './landing-projects.styles'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingProjects = () => (
	<LandingProjectsOuterWrapper>
		<ProjectsBackground1 />
		<ProjectsBackground2 />
		<LandingProjectsWrapper>
			<LineThroughLeft />
			<LineThroughRight />
			<MobileBackground />
			<ImageNameWrapper1>
				<NameHeadingWrapper>
					<NameHeading>Realizacje</NameHeading>
					<NameSubHeading>wnętrz biurowych</NameSubHeading>
				</NameHeadingWrapper>
				<Image path="project3.jpg" />
			</ImageNameWrapper1>
			<ImageNameWrapper2>
				<NameHeadingWrapper>
					<NameHeading>Realizacje</NameHeading>
					<NameSubHeading>pomieszczeń mieszkalnych</NameSubHeading>
				</NameHeadingWrapper>
				<Image path="project4.jpg" />
			</ImageNameWrapper2>
			<ImageNameWrapper3>
				<NameHeadingWrapper>
					<NameHeading>Projektowanie</NameHeading>
					<NameSubHeading>wnętrz biurowych i mieszkalnych</NameSubHeading>
				</NameHeadingWrapper>
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
					heading={'Galeria'}
					paragraph={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
					}
					discover={'Zobacz więcej'}
					linkTo={'/realizacje-wnętrz-biurowych'}
				></WelcomeInfo>
			</ArticleWrapper1>
			<ArticleWrapper2>
				<WelcomeInfo
					heading={'Galeria'}
					paragraph={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
					}
					discover={'Zobacz więcej'}
					linkTo={'/realizacje-wnętrz-mieszkalnych'}
				></WelcomeInfo>
			</ArticleWrapper2>
			<ArticleWrapper3>
				<WelcomeInfo
					heading={'Galeria'}
					paragraph={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae?'
					}
					discover={'Zobacz więcej'}
					linkTo={'/projekty'}
				></WelcomeInfo>
			</ArticleWrapper3>
		</LandingProjectsWrapper>
	</LandingProjectsOuterWrapper>
)
