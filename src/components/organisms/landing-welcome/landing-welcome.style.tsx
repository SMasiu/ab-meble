import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const WelcomeWrapper = styled.section`
	height: 100vh;
	min-height: 800px;
	background-image: url('/welcome.jpg');
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const WelcomeArticleOuterWrapper = styled.div`
	width: 1400px;
	margin: auto;
	height: 100%;
`

export const WelcomeArticleWrapper = styled.div`
	width: 800px;
	height: 100%;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100 + '88'};
	`}
`

export const WelcomeArticle = styled.article`
	padding: 25px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const HeaderWrapper = styled.header`
	position: relative;
	display: flex;
	width: 400px;
	height: 400px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	padding: 50px;
	font-family: 'Comfortaa', cursive;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
		border: solid 4px ${theme.colors.light100};
	`}
`

export const Heading = styled.h1`
	font-family: inherit;
	font-size: 8rem;
	font-weight: 400;
`

export const SubHeading = styled.h2`
	font-family: inherit;
	font-size: 3rem;
	font-weight: 400;
`

export const InfoSectionWrapper = styled.div`
	margin-top: 5px;
	position: relative;
	width: calc(100% + 210px);
	min-height: 200px;
`

export const InfoSection = styled.section`
	padding: 80px 150px 40px 150px;
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 53px;
`

export const LetterWrapper = styled.aside`
	position: absolute;
	top: 0;
	width: 160px;
	height: 160px;
	padding: 10px;
	border-radius: 50%;
	text-align: center;
`

export const LetterWrapperA = styled(LetterWrapper)`
	left: 0;
`

export const LetterWrapperB = styled(LetterWrapper)`
	right: 0;
`

export const Letter = styled.div`
	font-size: 14rem;
	opacity: 0.8;
	mix-blend-mode: difference;
	text-shadow: 1px 1px #222, -1px -1px #333;
	font-family: 'Comfortaa', cursive;
`

export const MoveToNextWrapper = styled.div`
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	padding: 5px;
	border-radius: 50%;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
		border: solid 4px ${theme.colors.light100};
	`}
`
