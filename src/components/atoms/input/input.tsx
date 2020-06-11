import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const Input = styled.input`
	border: none;
	padding: 10px;
	${({ theme }: ThemeProps) => css`
		border: solid 2px ${theme.colors.primary100};
		background-color: ${theme.colors.light100};
		font-size: ${theme.fontSizes.medium};
		&::placeholder {
			transition: color 0.2s;
			color: ${theme.colors.primary300};
		}
	`}

	&:focus {
		outline: none;

		&::placeholder {
			color: transparent;
		}
	}
`
