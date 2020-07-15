import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { DynamicImageProps } from 'types/dynamic-image'
import { ImageCover } from './vizualizations.style'

export const DynamicImageVizualizationCover: React.FC<DynamicImageProps> = ({
	alt,
	fileName,
}) => (
	<StaticQuery
		query={graphql`
			query DynamicImageVizualizationCover {
				images: allFile {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 810) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.images.edges.find((n: any) => {
				return n.node.relativePath.includes(fileName)
			})
			if (!image) {
				return null
			}

			return <ImageCover alt={alt} fluid={image.node.childImageSharp.fluid} />
		}}
	/>
)
