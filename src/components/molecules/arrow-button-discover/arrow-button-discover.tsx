import React from 'react'
import { ArrowOuterWrapper, ArrowWrapper } from './arrow-button-discover.style'
import { ArrowButton as ArrowButtonComponent } from 'components/atoms/arrow-button/arrow-button'

interface ArrowButtonProps {
	discover: string
}

export const ArrowButtonDiscover: React.FC<ArrowButtonProps> = ({
	discover,
}) => (
	<div>
		<ArrowOuterWrapper>
			<p>{discover}</p>
			<ArrowWrapper>
				<ArrowButtonComponent />
			</ArrowWrapper>
		</ArrowOuterWrapper>
	</div>
)
