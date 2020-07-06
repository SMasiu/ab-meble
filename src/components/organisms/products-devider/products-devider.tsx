import React from 'react'
import {
	ProductDeviderOuterWrapper,
	ProductDeviderWrapper,
	ImageOfficeWrapper,
	ImageFlatWrapper,
	ImageWrapper,
	ArticleWrapper,
	ArticleHeader,
	ArticleHeading,
	ArticleParagraph,
	ProductHeader,
} from './products-devider.style'
import { ArrowButtonDiscover } from 'components/molecules/arrow-button-discover/arrow-button-discover'

export const ProductsDevider: React.FC = () => (
	<ProductDeviderOuterWrapper>
		<ProductHeader>Produkty</ProductHeader>
		<ProductDeviderWrapper>
			<ArticleWrapper>
				<ArticleHeader>
					<ArticleHeading>Biuro</ArticleHeading>
				</ArticleHeader>
				<ArticleParagraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					quibusdam!
				</ArticleParagraph>
				<ArrowButtonDiscover discover="Zobacz więcej" />
			</ArticleWrapper>
			<ImageWrapper>
				<ImageOfficeWrapper />
				<ImageFlatWrapper />
			</ImageWrapper>
			<ArticleWrapper>
				<ArticleHeader>
					<ArticleHeading>Dom</ArticleHeading>
				</ArticleHeader>
				<ArticleParagraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					quibusdam!
				</ArticleParagraph>
				<ArrowButtonDiscover discover="Zobacz więcej" />
			</ArticleWrapper>
		</ProductDeviderWrapper>
	</ProductDeviderOuterWrapper>
)
