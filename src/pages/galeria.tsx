import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Gallery } from 'components/organisms/gallery/gallery'
import { graphql } from 'gatsby'
import { GalleryImagesQueryResponse } from 'types/gallery.types'

interface GalleryProps {
	data: GalleryImagesQueryResponse
}

const GalleryPage: React.FC<GalleryProps> = ({ data }) => (
	<Layout>
		<SEO title="Galeria" />
		<Gallery data={data} />
	</Layout>
)

export default GalleryPage

export const query = graphql`
	query GalleryFilesQuery {
		allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
			edges {
				node {
					publicURL
				}
			}
		}
	}
`
