import React from 'react'
import { WelcomeInfoWrapper, WelcomeInfoHeading } from './welcome-info.style'
import { Link } from 'gatsby'
import { ArrowButtonDiscover } from '../arrow-button-discover/arrow-button-discover'

interface WelcomeInfoProps {
	heading: string
	paragraph: string
	discover: string
	linkTo: string
}

export const WelcomeInfo: React.FC<WelcomeInfoProps> = ({
	heading,
	paragraph,
	discover,
	linkTo,
}) => (
	<WelcomeInfoWrapper>
		<WelcomeInfoHeading>{heading}</WelcomeInfoHeading>
		<p>{paragraph}</p>
		<Link to={linkTo}>
			<ArrowButtonDiscover discover={discover} />
		</Link>
	</WelcomeInfoWrapper>
)
