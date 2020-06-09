import React from 'react'
import {
	WelcomeInfoWrapper,
	WelcomeInfoHeading,
	WelcomeInfoFooter,
	WelcomeInfoArrowWrapper,
} from './welcome-info.style'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'

interface WelcomeInfoProps {
	heading: string
	paragraph: string
	discover: string
}

export const WelcomeInfo: React.FC<WelcomeInfoProps> = ({
	heading,
	paragraph,
	discover,
}) => (
	<WelcomeInfoWrapper>
		<WelcomeInfoHeading>{heading}</WelcomeInfoHeading>
		<p>{paragraph}</p>
		<WelcomeInfoFooter>
			<p>{discover}</p>
			<WelcomeInfoArrowWrapper>
				<ArrowButton />
			</WelcomeInfoArrowWrapper>
		</WelcomeInfoFooter>
	</WelcomeInfoWrapper>
)
