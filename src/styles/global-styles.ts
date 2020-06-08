import { createGlobalStyle, css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const GlobalStyles = createGlobalStyle`
    ${({ theme }: ThemeProps) => css`
			:root {
				font-size: 62.5%;
			}

			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				font-family: 'Montserrat', sans-serif;
				font-size: ${theme.fontSizes.medium};
				color: ${theme.colors.dark300};
				background-color: ${theme.colors.light100};
			}

			img {
				width: 100%;
			}
		`}
`
