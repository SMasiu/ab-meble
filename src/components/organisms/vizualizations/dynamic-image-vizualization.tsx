import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { DynamicImageProps } from 'types/dynamic-image'
import { ImageOffset } from './vizualizations.style'

export const DynamicImage: React.FC<DynamicImageProps> = ({
	alt,
	fileName,
}) => (
	<StaticQuery
		query={graphql`
			query DynamicImageVizualization {
				images: allFile {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 600) {
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

			return <ImageOffset alt={alt} fluid={image.node.childImageSharp.fluid} />
		}}
	/>
)
