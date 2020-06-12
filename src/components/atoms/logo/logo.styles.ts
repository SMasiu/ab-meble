import styled from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const LogoWrapper = styled.div`
	display: flex;
	align-items: flex-end;
`

export const LogoAB = styled.figure`
	width: 75px;
`

export const LogoName = styled.p`
	font-size: ${({ theme }: ThemeProps) => theme.fontSizes.extraLarge};
	font-family: 'Comfortaa', cursive;
	margin-bottom: 3px;
`
