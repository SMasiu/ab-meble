import React from 'react'
import {
	LandingAboutWrapper,
	AboutArticle,
	ImagesArticle,
} from './landing-about.styles'
import { LineThrough } from 'components/atoms/line-through/line-through'

export const LandingAbout = () => (
	<LandingAboutWrapper>
		<AboutArticle>
			<LineThrough />
		</AboutArticle>
		<ImagesArticle>b</ImagesArticle>
	</LandingAboutWrapper>
)
