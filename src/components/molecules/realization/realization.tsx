import React from 'react'
import { RealizationType } from 'types/realization.types'
import {
	RealizationOuterWrapper,
	RealizationWrapper,
	RealizationImages,
	RealizationAbout,
	RealizationHeaderText,
	RealizationHeader,
	RealizationAboutText,
	ImageWrapper1,
	ImageWrapper2,
	ImageWrapper3,
	ImageBackground,
	ArrowDownWrapper,
} from './realization.style'

interface RealizationProps {
	realization: RealizationType
	index: number
	arrow: boolean
}

export const Realization: React.FC<RealizationProps> = ({
	realization: { header, paragraph, image1, image2, image3, imageBackground },
	index,
	arrow,
}) => (
	<RealizationOuterWrapper>
		{console.log(arrow)}
		<ImageBackground imageUrl={imageBackground} />
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
		{arrow && <ArrowDownWrapper />}
	</RealizationOuterWrapper>
)
