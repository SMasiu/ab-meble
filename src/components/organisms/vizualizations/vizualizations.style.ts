import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const VizualizationsWrapper = styled.section`
	margin: auto;
	width: 90%;
	max-width: 1400px;
	height: 100vh;
	min-height: 900px;
	display: grid;
	grid-template-columns: 2fr 3fr;
	gap: 50px;
`

export const VizualizationsHeader = styled.header`
	font-family: 'Comfortaa', cursive;
	margin-bottom: 25px;
`

export const VizualziationsHeading = styled.h2`
	font-size: 4rem;
	font-family: inherit;
`

export const VizualziationsSubHeading = styled.h3`
	font-size: 2rem;
	font-family: inherit;
`

export const VizualziationsArticle = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const VizualziationsText = styled.p`
	margin: 15px 0;
`

export const ImagesWrapper = styled.section`
	padding: 100px 0;
	position: relative;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`}
`

export const Image = styled.figure`
	height: 100%;
	background-image: url(project1.jpg);
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
`

export const ImageOffsettedRiht = styled.figure`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 65px;
	height: 300px;
	width: 600px;
	background-image: url(project2.jpg);
	background-size: cover;
	background-position: center;
	${({ theme }: ThemeProps) => css`
		border: solid 25px ${theme.colors.light100};
	`}
`

export const ImageOffsettedLeft = styled.figure`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 25px;
	height: 350px;
	width: 600px;
	background-image: url(project5.jpg);
	background-size: cover;
	background-position: center;
	${({ theme }: ThemeProps) => css`
		border: solid 25px ${theme.colors.light100};
	`}
`
