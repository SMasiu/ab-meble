import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type GalleryImageProps = {
	url: string
} & ThemeProps

export const GalleryWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: 500px;
	grid-auto-flow: dense;
	align-content: stretch;
	gap: 10px;
	padding: 60px 10px 10px 10px;
`

export const GalleryImage = styled.figure<GalleryImageProps>`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;

	${({ url }: GalleryImageProps) => css`
		background-image: url(${url});
	`}

	&:nth-child(4n) {
		grid-row: span 2;
	}

	&:nth-child(5n) {
		grid-column: span 2;
	}
`
