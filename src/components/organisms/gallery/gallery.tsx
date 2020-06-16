import React from 'react'
import { GalleryImagesQueryResponse } from 'types/gallery.types'
import { GalleryWrapper } from './gallery.style'
import { GalleryImage } from 'components/atoms/gallery-image/gallery-image'

interface GalleryProps {
	data: GalleryImagesQueryResponse
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
	return (
		<GalleryWrapper>
			{data.allFile.edges.map((file, i) => (
				<GalleryImage url={file.node.publicURL} key={i} />
			))}
		</GalleryWrapper>
	)
}
