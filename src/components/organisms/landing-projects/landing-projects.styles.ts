import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'
import { LineThrough } from 'components/atoms/line-through/line-through'

type ImageWrapperProps = {
	url: string
} & ThemeProps

export const LandingProjectsOuterWrapper = styled.div`
	height: 200vh;
	min-height: 1600px;
	position: relative;
`

export const LandingProjectsWrapper = styled.section`
	z-index: 5000;
	position: relative;
	width: 1800px;
	height: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: 800px 1fr;
	gap: 50px;
`

export const ItemsSectionWrapper = styled.section`
	height: 100%;
	display: grid;
	gap: 25px;
`

export const ItemsSectionWrapperLeft = styled(ItemsSectionWrapper)`
	grid-template-columns: 1fr 400px;
`

export const ItemsSectionWrapperRight = styled(ItemsSectionWrapper)`
	grid-template-columns: 400px 1fr;
`

export const ContentWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`

export const ImageWrapper = styled.figure<ImageWrapperProps>`
	position: relative;
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background-size: cover;

	${({ theme }: ThemeProps) => css`
		border: solid 4px ${theme.colors.light300};
	`}

	${({ url }: ImageWrapperProps) => css`
		background-image: url(${url});
	`}
`

export const ArticleWrapper = styled.article`
	height: 400px;
	display: flex;
	align-items: center;
`

export const ArticleHeading = styled.h1`
	font-size: 6rem;
	font-family: 'Comfortaa', cursive;
`

export const ProjectsBackground = styled.section`
	z-index: 4000;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	height: 600px;
	background-image: url('/projects-cover.jpg');
	background-size: cover;
	background-attachment: fixed;
`

export const HalfLineThrough = styled(LineThrough)`
	height: 50%;
`
