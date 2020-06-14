import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'
import { LineThrough } from 'components/atoms/line-through/line-through'

type ImageWrapperProps = {
	url: string
} & ThemeProps

export const ItemsSectionWrapper = styled.section`
	height: 100%;
	display: grid;
	gap: 25px;
`

export const ItemsSectionWrapperLeft = styled(ItemsSectionWrapper)`
	grid-template-columns: 1fr 400px;
	z-index: 3000;
`

export const LeftLineThrough = styled(LineThrough)``

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
export const ContentWrapperLeftNames = styled(ContentWrapper)``
export const ContentWrapperRightImages = styled(ContentWrapper)``
export const ContentWrapperRightDesc = styled(ContentWrapper)``

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

export const ProjectsBackgroundWrapper = styled.div`
	z-index: 4000;
	position: absolute;
	top: calc(50% - 300px);
	width: 100%;
	height: 600px;
`

export const ProjectsBackground = styled.section`
	height: 100%;
	background-attachment: fixed;
	background-image: url('projects-cover.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

export const HalfLineThrough = styled(LineThrough)`
	height: 50%;
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

	@media screen and (max-width: 1850px) {
		width: 1400px;
		grid-template-columns: 600px 1fr;
	}

	@media screen and (max-width: 1450px) {
		width: 90%;
		grid-template-columns: 3fr 1fr;
		gap: 0;
		${ContentWrapperRightImages} {
			display: none;
		}

		${ItemsSectionWrapperLeft} {
			grid-template-columns: 1fr 2fr;
			gap: 0;
		}

		${ItemsSectionWrapperRight} {
			grid-template-columns: 1fr;
			gap: 0;
		}
	}

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
		position: relative;

		${ItemsSectionWrapperLeft} {
			grid-template-columns: 1fr;
			position: relative;
		}

		${ContentWrapperLeftNames} {
			position: absolute;
			height: 100%;
			top: 0;
			left: 50%;
			z-index: 4000;
			transform: translateX(-50%);
			width: 400px;

			${ArticleWrapper} {
				width: 100%;
			}

			${ArticleHeading} {
				width: 100%;
				border-radius: 5px;
				text-align: center;
				padding: 10px;
				${({ theme }: ThemeProps) => css`
					background-color: ${theme.colors.light100};
				`};
			}
		}

		${ContentWrapperRightDesc} {
			position: relative;
			z-index: 6000;
		}

		${ItemsSectionWrapperRight} {
			position: absolute;
			top: 50%;
			left: 50%;
			height: 60%;
			transform: translate(-50%, -50%);
			width: 350px;
			${({ theme }: ThemeProps) => css`
				background-color: ${theme.colors.light100 + 'bb'};
			`}

			${ArticleWrapper} {
				z-index: 6000;
				height: auto;
				padding: 0 25px;
			}
		}

		${LeftLineThrough} {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		width: 95%;
		${ItemsSectionWrapperRight} {
			width: 275px;
		}

		${ItemsSectionWrapperLeft} ${ArticleWrapper} {
			height: 300px;
		}

		${ContentWrapperLeftNames} {
			width: 300px;
		}

		${ImageWrapper} {
			width: 300px;
			height: 300px;
		}
	}
`

export const LandingProjectsOuterWrapper = styled.div`
	height: 200vh;
	min-height: 1600px;
	position: relative;

	@media screen and (max-width: 1000px) {
		height: 2000px;
		min-height: 2000px;
	}

	@media screen and (max-width: 500px) {
		height: 1650px;
		min-height: 1650px;
	}
`
