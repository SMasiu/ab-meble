import React from 'react'
import { WelcomeInfoWrapper, WelcomeInfoHeading } from './welcome-info.style'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'

interface WelcomeInfoProps {
	heading: string
	paragraph: string
}

export const WelcomeInfo: React.FC<WelcomeInfoProps> = ({
	heading,
	paragraph,
}) => (
	<WelcomeInfoWrapper>
		<WelcomeInfoHeading>{heading}</WelcomeInfoHeading>
		<p>{paragraph}</p>
		<ArrowButton />
	</WelcomeInfoWrapper>
)
