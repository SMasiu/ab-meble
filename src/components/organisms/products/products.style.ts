import styled, { css } from 'styled-components'

export const ProductsWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 250px;
	gap: 50px;
	margin-top: 50px;
	max-width: 1600px;
	margin: 100px auto 25px auto;
`

export const HeaderCss = css`
	font-size: 24px;
	font-family: 'Comfortaa', cursive;
	margin-bottom: 25px;
`

export const ProductsHeader = styled.header`
	${HeaderCss}
`

export const PartnersLogoHeader = styled.header`
	${HeaderCss}
`

export const PartnersWrapper = styled.section``

export const PartnersLogoWrapper = styled.section``

export const PartnerLogo = styled.figure`
	margin: 50px 0;
`

export const PartnerLogoImage = styled.img`
	width: 100%;
`
