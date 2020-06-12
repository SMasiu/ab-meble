import React from 'react'
import {
	AboutWrapper,
	AboutOuterWrapper,
	AboutImageWrapper,
	AboutArticleWrapper,
	AboutImage,
	AboutHeading,
	AboutParagraph,
	ReadMore,
	ReadMoreText,
} from './landing-about.style'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'

export const LandingAbout = () => (
	<AboutOuterWrapper>
		<AboutWrapper>
			<AboutImageWrapper>
				<AboutImage />
			</AboutImageWrapper>
			<AboutArticleWrapper>
				<AboutHeading>Kim jesteśmy?</AboutHeading>
				<AboutParagraph>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate
					inventore accusantium quod illo, facilis earum autem saepe magnam ab
					consequatur facere totam fugit officia. In id repellat vel sint!
				</AboutParagraph>
				<AboutParagraph>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate
					inventore accusantium quod illo, facilis earum autem saepe magnam ab
					consequatur facere totam fugit officia. In id repellat vel sint!
				</AboutParagraph>
				<ReadMore>
					<ReadMoreText>Discover</ReadMoreText>
					<ArrowButton />
				</ReadMore>
			</AboutArticleWrapper>
		</AboutWrapper>
	</AboutOuterWrapper>
)
