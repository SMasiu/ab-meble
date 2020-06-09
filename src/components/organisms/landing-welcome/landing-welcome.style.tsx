import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const WelcomeWrapper = styled.section`
	position: relative;
`

export const CoverImageWrapper = styled.figure`
	height: 100vh;
	background-image: url('/welcome.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const WelcomeArticle = styled.article`
	width: 800px;
	height: 100vh;
	position: absolute;
	left: 20%;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100 + 'aa'};
	`}
`

export const HeaderWrapper = styled.header`
	display: flex;
	width: 400px;
	height: 400px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	padding: 50px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
		border: solid 4px ${theme.colors.light100};
	`}
`

export const Heading = styled.h1`
	font-size: 80px;
	font-weight: 400;
`

export const SubHeading = styled.h2`
	font-size: 30px;
	font-weight: 400;
`

export const LineThrough = styled.div``
