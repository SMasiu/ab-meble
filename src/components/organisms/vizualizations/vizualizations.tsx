import React from 'react'
import {
	VizualizationsWrapper,
	VizualizationsHeader,
	VizualziationsHeading,
	VizualziationsSubHeading,
	VizualziationsArticle,
	VizualziationsText,
	ImagesWrapper,
	Image,
	ImageOffsettedRiht,
	ImageOffsettedLeft,
} from './vizualizations.style'

export const Vizualizations = () => (
	<VizualizationsWrapper>
		<VizualziationsArticle>
			<VizualizationsHeader>
				<VizualziationsSubHeading>Wizualizacje</VizualziationsSubHeading>
				<VizualziationsHeading>Projekty wnętrz</VizualziationsHeading>
			</VizualizationsHeader>
			<VizualziationsText>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quidem
				porro vero eius. Libero iusto ab velit exercitationem architecto odio
				eveniet. Nihil, commodi. Pariatur, unde!
			</VizualziationsText>
			<VizualziationsText>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consectetur
				adipisci. Culpa, omnis? Eos, perferendis esse? Fugiat consequuntur error
				hic, natus ut nemo dolorum quidem debitis neque cupiditate laudantium
				eligendi.
			</VizualziationsText>
		</VizualziationsArticle>
		<ImagesWrapper>
			<Image />
			<ImageOffsettedRiht />
			<ImageOffsettedLeft />
		</ImagesWrapper>
	</VizualizationsWrapper>
)
