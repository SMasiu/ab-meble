import React from 'react'
import { ArrowButtonWrapper } from './arrow-button.styles'

interface ArrowButtonProps {
	name?: string
	size?: string
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ name, size }) => (
	<ArrowButtonWrapper size={size}>
		<img src={`${name || 'arrow'}.svg`} alt="arrow" />
	</ArrowButtonWrapper>
)
