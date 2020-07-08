import React from 'react'
import {
	RealizationWrapper,
	RealizationImageWrapper,
	RealizationArticleWrapper,
	RealizationArticle,
	ArticleHeader,
	ArticleHeading,
	ArticleParagraph,
	ArticleSubHeading,
	ArticleWaterMarkText,
	ImageWrapper1,
	ImageWrapper2,
	ImageWrapper3,
	ArrowNext,
	Line,
} from './realization.style'
import { RealizationType } from 'types/realization.types'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'

interface RealizationProps {
	realization: RealizationType
	index: number
}

export const Realization: React.FC<RealizationProps> = ({
	realization: { imageBackground, header, paragraph, image1, image2, image3 },
	index,
}) => (
	<RealizationWrapper url={imageBackground} index={index}>
		<Line />
		<ArrowNext>
			<ArrowButton name="arrow-down"></ArrowButton>
		</ArrowNext>
		<RealizationArticleWrapper>
			<RealizationArticle>
				<ArticleHeader>
					<ArticleSubHeading>Realizacja</ArticleSubHeading>
					<ArticleHeading>{header}</ArticleHeading>
				</ArticleHeader>
				<ArticleParagraph>{paragraph}</ArticleParagraph>
			</RealizationArticle>
		</RealizationArticleWrapper>
		<RealizationImageWrapper>
			<ImageWrapper1 url={image1}></ImageWrapper1>
			<ImageWrapper2 url={image2}></ImageWrapper2>
			<ImageWrapper3 url={image3}></ImageWrapper3>
		</RealizationImageWrapper>
		<ArticleWaterMarkText>AB</ArticleWaterMarkText>
	</RealizationWrapper>
)
