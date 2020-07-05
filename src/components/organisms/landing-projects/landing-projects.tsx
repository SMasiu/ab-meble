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
	ProjectsBackground,
	LineThroughLeft,
	LineThroughRight,
	MobileBackground,
	NameSubHeading,
} from './landing-projects.styles'
import { WelcomeInfo } from 'components/molecules/welcome-info/welcome-info'

export const LandingProjects = () => (
	<LandingProjectsOuterWrapper>
		<ProjectsBackground />
		<LandingProjectsWrapper>
			<LineThroughLeft />
			<LineThroughRight />
			<MobileBackground />
			<ImageNameWrapper1>
				<div>
					<NameHeading>Realizacje</NameHeading>
					<NameSubHeading>wnętrz biurowych</NameSubHeading>
				</div>
				<Image path="project3.jpg" />
			</ImageNameWrapper1>
			<ImageNameWrapper2>
				<div>
					<NameHeading>Realizacje</NameHeading>
					<NameSubHeading>pomieszczeń mieszkalnych</NameSubHeading>
				</div>
				<Image path="project4.jpg" />
			</ImageNameWrapper2>
			<ImageNameWrapper3>
				<div>
					<NameHeading>Projektowanie</NameHeading>
					<NameSubHeading>wnętrz biurowych i mieszkalnych</NameSubHeading>
				</div>
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
					linkTo={'/realizacje-wnęrz-biurowych'}
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
