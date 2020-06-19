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
} from './reference.style'
import { Refs } from 'types/references.type'

interface ReferenceProps {
	reference: Refs
	index: number
}

export const Reference: React.FC<ReferenceProps> = ({
	reference: { imagePath, companyLogoPath, companyName, quotation },
	index,
}) => (
	<ReferenceWrapper index={index}>
		<ReferenceImageWrapper>
			<ReferenceImageContainer>
				<img src={imagePath} alt="Referencja" />
			</ReferenceImageContainer>
		</ReferenceImageWrapper>
		<ReferenceArticleWrapper>
			<ArticleHeader>
				<ArticleLogoWrapper>
					<ArticleLogo src={companyLogoPath} alt="company logo" />
				</ArticleLogoWrapper>
				<HeaderName>{companyName}</HeaderName>
			</ArticleHeader>
			<p>{quotation}</p>
		</ReferenceArticleWrapper>
	</ReferenceWrapper>
)
