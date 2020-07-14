import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export type ProductItemImageProps = {
	url: string
} & ThemeProps

export const HeaderCss = css`
	font-size: 24px;
	font-family: 'Comfortaa', cursive;
	margin-bottom: 25px;
`

export const ProductsHeader = styled.header`
	${HeaderCss}
`

export const OurProductsWrapper = styled.section``

export const ProductItemsWrapper = styled.section`
	display: grid;
	gap: 25px;
	grid-template-columns: repeat(2, 1fr);
`

export const ProductItem = styled.section`
	display: grid;
	grid-template-columns: auto 1fr;
	border-radius: 200px 100px 0 200px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`}

	&:nth-child(2n) {
		border-radius: 200px 0 100px 200px;
	}
`

export const ProductItemImage = styled.figure<ProductItemImageProps>`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	${({ url }: ProductItemImageProps) => css`
		background-image: url(${url});
		background-size: cover;
		background-position: center;
	`}
`

export const ProductDescription = styled.article`
	padding: 25px;
`

export const ProductDescriptionHeader = styled.header`
	font-family: 'Comfortaa', cursive;
	margin-bottom: 10px;
`

export const ProductDescriptionHeading = styled.h3`
	font-family: inherit;
`

export const ProductDescriptionText = styled.p``

export const PartnersLogoHeader = styled.header`
	${HeaderCss}
`

export const PartnersWrapper = styled.section``

export const PartnersLogoWrapper = styled.section``

export const PartnerLogo = styled.figure`
	margin: 75px 0;
`

export const PartnerLogoImage = styled.img`
	width: 100%;
`

export const ProductsWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 250px;
	gap: 50px;
	margin-top: 50px;
	max-width: 1600px;
	width: 90%;
	margin: 100px auto 25px auto;

	@media screen and (max-width: 1500px) {
		grid-template-columns: 1fr;

		${PartnersLogoWrapper} {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}

		${PartnerLogo} {
			margin: 25px 50px;
			width: 250px;
		}
	}

	@media screen and (max-width: 1050px) {
		${ProductItemsWrapper} {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 550px) {
		${ProductItem} {
			grid-template-columns: 1fr;
			border-radius: 0;
			padding: 20px 0 0 0;
		}

		${ProductItemImage} {
			margin: auto;
			width: 300px;
			height: 300px;
		}

		${PartnerLogo} {
			margin: 25px 0;
			width: 100%;
		}
	}

	@media screen and (max-width: 400px) {
		${ProductItemImage} {
			width: 250px;
			height: 250px;
		}
	}
`
