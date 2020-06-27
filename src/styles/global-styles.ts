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
				font-family: 'Montserrat', sans-serif;
			}

			body {
				font-size: ${theme.fontSizes.medium};
				color: ${theme.colors.dark300};
				background-color: ${theme.colors.light100};

				&::-webkit-scrollbar-track {
					border-radius: 10px;
					background-color: transparent;
				}

				&::-webkit-scrollbar {
					width: 6px;
					background-color: ${theme.colors.light100};
				}

				&::-webkit-scrollbar-thumb {
					border-right: 2px solid ${theme.colors.light100};
					border-radius: 10px;
					background-color: ${theme.colors.dark100};
				}
			}

			img {
				width: 100%;
			}

			button,
			input,
			textarea {
				font-family: 'Montserrat', sans-serif;
			}

			a {
				color: ${theme.colors.dark300};
				text-decoration: none;
			}

			.no-scroll {
				overflow-y: hidden;

				&::-webkit-scrollbar {
					width: 0;
				}
			}

			@keyframes arrow-motion {
				0% { background-position-y: 0; }
				100% { background-position-y: 30px; }
			}
		`}
`

