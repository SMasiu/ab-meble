import React from 'react'
import {
	ReferenceImageWrapper,
	ReferenceArticleWrapper,
	ReferenceWrapper,
	ReferenceImageContainer,
	ArticleHeader,
	ArticleLogoWrapper,
	ArticleLogo,
	HeaderName,
	ArticleText,
	ArticleProjectImage,
} from './reference.style'
import { Refs } from 'types/references.type'

interface ReferenceProps {
	reference: Refs
	index: number
}

export const Reference: React.FC<ReferenceProps> = ({
	reference: {
		imagePath,
		companyLogoPath,
		companyName,
		quotation,
		projectImagePath,
	},
	index,
}) => (
	<ReferenceWrapper index={index}>
		<ReferenceImageWrapper>
			<ReferenceImageContainer>
				<img src={imagePath} alt="Referencja" />
			</ReferenceImageContainer>
		</ReferenceImageWrapper>
		<ReferenceArticleWrapper>
			<ArticleLogoWrapper>
				<ArticleLogo src={companyLogoPath} alt="company logo" />
			</ArticleLogoWrapper>
			<ArticleHeader>
				<HeaderName>{companyName}</HeaderName>
			</ArticleHeader>
			<ArticleText>{quotation}</ArticleText>
			<ArticleProjectImage url={projectImagePath}></ArticleProjectImage>
		</ReferenceArticleWrapper>
	</ReferenceWrapper>
)
