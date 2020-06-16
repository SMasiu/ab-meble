import React from 'react'
import { GalleryImagesQueryResponse } from 'types/gallery.types'
import { GalleryWrapper, GalleryImage } from './gallery'

interface GalleryProps {
	data: GalleryImagesQueryResponse
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
	return (
		<GalleryWrapper>
			{data.allFile.edges.map((file, i) => (
				<GalleryImage key={i} url={file.node.publicURL} />
			))}
		</GalleryWrapper>
	)
}
