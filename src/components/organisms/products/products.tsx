import React from 'react'
import {
	ProductsWrapper,
	ProductsHeader,
	PartnersLogoHeader,
	PartnersWrapper,
	PartnersLogoWrapper,
	PartnerLogo,
	PartnerLogoImage,
} from './products.style'

const partnersLogo = [
	{
		path: 'partners-logo/aluprof-logo.svg',
	},
	{
		path: 'partners-logo/schueco-logo.svg',
	},
	{
		path: 'partners-logo/yawal-logo.png',
	},
]

export const Products = () => (
	<ProductsWrapper>
		<ProductsHeader>Our products</ProductsHeader>
		<PartnersWrapper>
			<PartnersLogoHeader>Our partners</PartnersLogoHeader>
			<PartnersLogoWrapper>
				{partnersLogo.map(({ path }, i) => (
					<PartnerLogo key={i}>
						<PartnerLogoImage src={path} />
					</PartnerLogo>
				))}
			</PartnersLogoWrapper>
		</PartnersWrapper>
	</ProductsWrapper>
)
