import { ThemeProps } from 'types/theme.types'
import styled, { css } from 'styled-components'

type GalleryImageProps = {
	url: string
	visible: boolean
} & ThemeProps

export const GalleryImageContent = styled.figure<GalleryImageProps>`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	transition-duration: 0.5s;
	transition-delay: 0.2s;
	transition-property: transform, opacity;
	will-change: transform, opacity;
	opacity: 1;

	${({ url }: GalleryImageProps) => css`
		background-image: url(${url});
	`}

	${({ visible }: GalleryImageProps) =>
		!visible &&
		css`
			opacity: 0;
			transform: scale(0.75);
		`}
`

export const GalleryImageWrapper = styled.div`
	width: 100%;
	height: 100%;

	&:nth-child(4n) {
		grid-row: span 2;
	}

	&:nth-child(5n) {
		grid-column: span 2;
	}

	@media screen and (max-width: 550px) {
		&:nth-child(5n) {
			grid-column: span 1;
		}
	}
`
