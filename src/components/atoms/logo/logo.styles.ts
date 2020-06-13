import styled from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type LogoABProps = {
	expanded: boolean
} & ThemeProps

export const LogoAB = styled.figure<LogoABProps>`
	transition: width 0.2s;
	will-change: width;
	margin-bottom: -4px;
	width: ${({ expanded }) => `${expanded ? 150 : 100}px`};
`
