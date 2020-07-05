import React from 'react'
import {
	WelcomeInfoWrapper,
	WelcomeInfoHeading,
	WelcomeInfoFooter,
	WelcomeInfoArrowWrapper,
} from './welcome-info.style'
import { ArrowButton } from 'components/atoms/arrow-button/arrow-button'
import { Link } from 'gatsby'

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
			<WelcomeInfoFooter>
				<p>{discover}</p>
				<WelcomeInfoArrowWrapper>
					<ArrowButton />
				</WelcomeInfoArrowWrapper>
			</WelcomeInfoFooter>
		</Link>
	</WelcomeInfoWrapper>
)
