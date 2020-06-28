import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type RealizationWrapperProps = {
	index: number
} & ThemeProps

type ImageWrapperProps = {
	imageUrl: string
} & ThemeProps

type ImageBackgroundProps = {
	imageUrl: string
} & ThemeProps

export const RealizationOuterWrapper = styled.div`
	position: relative;
`

export const RealizationImages = styled.section`
	position: relative;
`

export const RealizationAbout = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	transform: translateY(-150px);
`

export const RealizationHeader = styled.header`
	margin-bottom: 25px;
	font-size: 2.2rem;
`

export const RealizationHeaderText = styled.h2`
	font-family: 'Comfortaa', cursive;
	text-align: center;
`

export const RealizationAboutText = styled.p``

export const ImageWrapper = styled.figure<ImageWrapperProps>`
	margin-bottom: -4px;
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	position: absolute;
	${({ theme, imageUrl }: ImageWrapperProps) => css`
		border: 4px solid ${theme.colors.light300};
		background-image: url(${imageUrl});
	`}
`

export const ImageWrapper1 = styled(ImageWrapper)`
	top: 30%;
	left: 50%;
	transform: translate(-50%, -30%);
`

export const ImageWrapper2 = styled(ImageWrapper)`
	left: calc(50% - 200px);
	top: calc(30% + 200px);
	width: 350px;
	height: 350px;
	transform: translate(-50%, -30%);
`

export const ImageWrapper3 = styled(ImageWrapper)`
	left: calc(50% + 250px);
	top: calc(30% + 250px);
	width: 250px;
	height: 250px;
	transform: translate(-50%, -30%);
`

export const ImageBackground = styled.figure<ImageBackgroundProps>`
	height: 450px;
	width: 100%;
	position: absolute;
	bottom: 0;
	background-attachment: fixed;
	background-size: cover;
	background-position: center 80%;
	${({ imageUrl }: ImageBackgroundProps) => css`
		background-image: url(${imageUrl});
	`}
`

export const ArrowDownWrapper = styled.figure`
	width: 30px;
	height: 30px;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	cursor: pointer;
	background-image: url('arrow-down.svg');
	animation: arrow-motion;
	animation-iteration-count: infinite;
	animation-duration: 0.8s;
	border-radius: 50%;
`

export const RealizationWrapper = styled.aside<RealizationWrapperProps>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	min-height: 900px;
	height: 100vh;
	gap: 50px;
	width: 1400px;
	padding: 50px 50px 0 50px;
	margin: auto;
	@media screen and (max-width: 1500px) {
		grid-template-columns: 1fr 500px;
	}
	${({ index }: RealizationWrapperProps) =>
		index % 2 === 1 &&
		css`
			@media screen and (max-width: 1500px) {
				grid-template-columns: 500px 1fr;
			}

			${RealizationImages} {
				grid-column: 2;
				grid-row: 1;

				${ImageWrapper2} {
					left: calc(50% + 200px);
					top: calc(30% + 200px);
				}

				${ImageWrapper3} {
					left: calc(50% - 250px);
					top: calc(30% + 250px);
				}
			}

			${RealizationAbout} {
				grid-column: 1;
				grid-row: 1;
			}
		`};

	@media screen and (max-width: 1450px) {
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr 1fr;
		gap: 0;
		width: 100%;

		${RealizationImages} {
			grid-column: 1;
			grid-row: 2;
		}

		${RealizationAbout} {
			margin: auto;
			max-width: 800px;
			grid-column: 1;
			grid-row: 1;
			height: 100%;
			transform: translateY(0);
		}

		${ImageWrapper1} {
			top: 5%;
			left: 50%;
			transform: translate(-50%, -30%);
		}

		${ImageWrapper2} {
			left: calc(50% - 400px) !important;
			top: calc(-20% + 200px) !important;
			width: 350px;
			height: 350px;
			transform: translate(-50%, -30%);
		}

		${ImageWrapper3} {
			left: calc(50% + 400px) !important;
			top: calc(-5% + 200px) !important;
			width: 350px;
			height: 350px;
			transform: translate(-50%, -30%);
		}
	}

	@media screen and (max-width: 1200px) {
		${ImageWrapper1} {
			width: 300px;
			height: 300px;
		}

		${ImageWrapper2} {
			left: calc(50% - 300px) !important;
			top: calc(-10% + 200px) !important;
			width: 250px;
			height: 250px;
		}

		${ImageWrapper3} {
			left: calc(50% + 300px) !important;
			top: calc(-10% + 250px) !important;
			width: 250px;
			height: 250px;
		}
	}

	@media screen and (max-width: 900px) {
		${ImageWrapper2} {
			left: calc(50% - 225px) !important;
			top: calc(-10% + 275px) !important;
		}

		${ImageWrapper3} {
			left: calc(50% + 225px) !important;
			top: calc(-10% + 275px) !important;
		}
	}

	@media screen and (max-width: 750px) {
		grid-template-rows: 300px 700px;

		${ImageWrapper1} {
			width: 400px;
			height: 400px;
			top: 20%;
		}

		${ImageWrapper2} {
			width: 300px;
			height: 300px;
			left: 50% !important;
			top: 340px !important;
			transform: translate(-50%, -30%);
		}

		${ImageWrapper3} {
			display: none;
		}
	}

	@media screen and (max-width: 450px) {
		${ImageWrapper1} {
			width: 300px;
			height: 300px;
		}

		${ImageWrapper2} {
			width: 250px;
			height: 250px;
		}
	}
`
