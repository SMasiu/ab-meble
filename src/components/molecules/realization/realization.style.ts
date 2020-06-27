import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type RealizationWrapperProps = {
	index: number
} & ThemeProps

type ImageWrapperProps = {
	imageUrl: string
} & ThemeProps

export const RealizationImages = styled.section`
	position: relative;
`

export const RealizationAbout = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
`

export const RealizationHeader = styled.header`
	margin-bottom: 10px;
	font-size: 2.2rem;
`

export const RealizationHeaderText = styled.h2`
	font-family: 'Comfortaa', cursive;
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

export const RealizationWrapper = styled.aside<RealizationWrapperProps>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	min-height: 900px;
	height: 100vh;
	gap: 50px;
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
