import React from 'react'
import {
	DeviderOuterWrapper,
	DeviderWrapper,
	Image1Wrapper,
	Image2Wrapper,
	ImageWrapper,
	ArticleWrapper,
	ArticleHeader,
	ArticleHeading,
	ArticleParagraph,
	Header,
} from './devider.style'
import { ArrowButtonDiscover } from 'components/molecules/arrow-button-discover/arrow-button-discover'

interface ArticleProps {
	header: string
	paragraph: string
	imageUrl: string
}

interface DeviderProps {
	header: string
	article: {
		first: ArticleProps
		second: ArticleProps
	}
}

export const Devider: React.FC<DeviderProps> = ({
	header,
	article: { first, second },
}) => (
	<DeviderOuterWrapper>
		<Header>{header}</Header>
		<DeviderWrapper>
			<ArticleWrapper>
				<ArticleHeader>
					<ArticleHeading>{first.header}</ArticleHeading>
				</ArticleHeader>
				<ArticleParagraph>{first.paragraph}</ArticleParagraph>
				<ArrowButtonDiscover discover="Zobacz więcej" />
			</ArticleWrapper>
			<ImageWrapper>
				<Image1Wrapper imageUrl={first.imageUrl} />
				<Image2Wrapper imageUrl={second.imageUrl} />
			</ImageWrapper>
			<ArticleWrapper>
				<ArticleHeader>
					<ArticleHeading>{second.header}</ArticleHeading>
				</ArticleHeader>
				<ArticleParagraph>{second.paragraph}</ArticleParagraph>
				<ArrowButtonDiscover discover="Zobacz więcej" />
			</ArticleWrapper>
		</DeviderWrapper>
	</DeviderOuterWrapper>
)
