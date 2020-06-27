import React from 'react'
import { RealizationType } from 'types/realization.types'
import {
	RealizationWrapper,
	RealizationImages,
	RealizationAbout,
	RealizationHeaderText,
	RealizationHeader,
	RealizationAboutText,
	ImageWrapper1,
	ImageWrapper2,
	ImageWrapper3,
} from './realization.style'

interface RealizationProps {
	realization: RealizationType
	index: number
}

export const Realization: React.FC<RealizationProps> = ({
	realization: { header, paragraph, image1, image2, image3 },
	index,
}) => (
	<RealizationWrapper index={index}>
		<RealizationImages>
			<ImageWrapper1 imageUrl={image1} />
			{image2 && <ImageWrapper2 imageUrl={image2} />}
			{image3 && <ImageWrapper3 imageUrl={image3} />}
		</RealizationImages>
		<RealizationAbout>
			<RealizationHeader>
				<RealizationHeaderText>{header}</RealizationHeaderText>
			</RealizationHeader>
			<RealizationAboutText>{paragraph}</RealizationAboutText>
		</RealizationAbout>
	</RealizationWrapper>
)
