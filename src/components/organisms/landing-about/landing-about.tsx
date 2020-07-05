import React from 'react'
import {
	AboutWrapper,
	AboutOuterWrapper,
	AboutImageWrapper,
	AboutArticleWrapper,
	AboutImage,
	AboutHeading,
	AboutParagraph,
} from './landing-about.style'

export const LandingAbout = () => (
	<AboutOuterWrapper id="about-us">
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
			</AboutArticleWrapper>
		</AboutWrapper>
	</AboutOuterWrapper>
)
