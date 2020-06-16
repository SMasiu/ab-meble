export interface GalleryImagesQueryResponse {
	allFile: {
		edges: ImageData[]
	}
}

export interface ImageData {
	node: {
		publicURL: string
	}
}
