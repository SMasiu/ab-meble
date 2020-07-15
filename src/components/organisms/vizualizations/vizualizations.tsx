import React from 'react'
import {
	VizualizationsWrapper,
	VizualizationsHeader,
	VizualziationsHeading,
	VizualziationsSubHeading,
	VizualziationsArticle,
	VizualziationsText,
	ImagesWrapper,
	ImageWrapperTop,
	ImageWrapperBottom,
} from './vizualizations.style'
import { vizualizationProps } from 'inputs/vizualization.props'
import { DynamicImage } from './dynamic-image-vizualization'
import { DynamicImageVizualizationCover } from './dynamic-image-vizualization-cover'

export interface VizualizationsProps {
	vizualizations: typeof vizualizationProps
}

export const Vizualizations: React.FC<VizualizationsProps> = ({
	vizualizations,
}) => (
	<VizualizationsWrapper>
		<VizualziationsArticle>
			<VizualizationsHeader>
				<VizualziationsSubHeading>
					{vizualizations.subHeading}
				</VizualziationsSubHeading>
				<VizualziationsHeading>{vizualizations.heading}</VizualziationsHeading>
			</VizualizationsHeader>
			<VizualziationsText>{vizualizations.paragraph1}</VizualziationsText>
			<VizualziationsText>{vizualizations.paragraph2}</VizualziationsText>
		</VizualziationsArticle>
		<ImagesWrapper>
			<DynamicImageVizualizationCover
				fileName={vizualizations.imageCoverPath}
				alt="project cover"
			/>
			<ImageWrapperTop>
				<DynamicImage fileName={vizualizations.imageTopPath} alt="project" />
			</ImageWrapperTop>
			<ImageWrapperBottom>
				<DynamicImage fileName={vizualizations.imageBottomPath} alt="project" />
			</ImageWrapperBottom>
		</ImagesWrapper>
	</VizualizationsWrapper>
)
