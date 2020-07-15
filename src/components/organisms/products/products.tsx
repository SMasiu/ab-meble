import React from 'react'
import {
	ProductsWrapper,
	ProductsHeader,
	PartnersLogoHeader,
	PartnersWrapper,
	PartnersLogoWrapper,
	PartnerLogo,
	PartnerLogoImage,
	OurProductsWrapper,
	ProductItemImage,
	ProductDescription,
	ProductDescriptionHeader,
	ProductDescriptionHeading,
	ProductDescriptionText,
	ProductItem,
	ProductItemsWrapper,
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

export const products = [
	{
		header: 'Krzesła',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga sequi ratione eligendi, atque mollitia.`,
		imagePath: 'project1.jpg',
	},
	{
		header: 'Stoły',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga sequi ratione eligendi, atque mollitia.`,
		imagePath: 'project5.jpg',
	},
	{
		header: 'Lampy',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga sequi ratione eligendi, atque mollitia.`,
		imagePath: 'project2.jpg',
	},
	{
		header: 'Dachy',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga sequi ratione eligendi, atque mollitia.`,
		imagePath: 'project4.jpg',
	},
	{
		header: 'Drzwi',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga sequi ratione eligendi, atque mollitia.`,
		imagePath: 'project5.jpg',
	},
	{
		header: 'Meble',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga sequi ratione eligendi, atque mollitia.`,
		imagePath: 'project3.jpg',
	},
]

export const Products = () => (
	<ProductsWrapper>
		<OurProductsWrapper>
			<ProductsHeader>Nasze produkty</ProductsHeader>
			<ProductItemsWrapper>
				{products.map((product, i) => (
					<ProductItem key={i}>
						<ProductItemImage url={product.imagePath}></ProductItemImage>
						<ProductDescription>
							<ProductDescriptionHeader>
								<ProductDescriptionHeading>
									{product.header}
								</ProductDescriptionHeading>
							</ProductDescriptionHeader>
							<ProductDescriptionText>
								{product.description}
							</ProductDescriptionText>
						</ProductDescription>
					</ProductItem>
				))}
			</ProductItemsWrapper>
		</OurProductsWrapper>
		<PartnersWrapper>
			<PartnersLogoHeader>Nasi dostawcy</PartnersLogoHeader>
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
