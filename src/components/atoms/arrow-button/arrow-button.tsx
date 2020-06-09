import React from 'react'
import { ArrowButtonWrapper } from './arrow-button.styles'

interface ArrowButtonProps {
	name?: string
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ name }) => (
	<ArrowButtonWrapper>
		<img src={`/${name || 'arrow'}.svg`} alt="arrow" />
	</ArrowButtonWrapper>
)
