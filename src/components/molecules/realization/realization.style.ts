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
	background-position: 0% 80%;
	${({ imageUrl }: ImageBackgroundProps) => css`
		background-image: url(${imageUrl});
	`}
`

export const RealizationWrapper = styled.aside<RealizationWrapperProps>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	min-height: 900px;
	height: 100vh;
	gap: 50px;
	width: 1400px;
	margin: auto;
	${({ index }: RealizationWrapperProps) =>
		index % 2 === 1 &&
		css`
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
	animation-duration: .8s;
	border-radius: 50%;
`