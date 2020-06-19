import React from 'react'
import {
	ReferenceImageWrapper,
	ReferenceArticleWrapper,
	ReferenceWrapper,
} from './reference.style'
import { Refs } from 'types/references.type'

interface ReferenceProps {
	reference: Refs
	index: number
}

export const Reference: React.FC<ReferenceProps> = ({
	reference: { imagePath },
	index,
}) => (
	<ReferenceWrapper index={index}>
		<ReferenceImageWrapper>
			<img src={imagePath} alt="Referencja" />
		</ReferenceImageWrapper>
		<ReferenceArticleWrapper>article</ReferenceArticleWrapper>
	</ReferenceWrapper>
)
