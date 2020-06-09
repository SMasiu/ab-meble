import React from 'react'

interface WelcomeInfoProps {
	heading: string
	paragraph: string
}

export const WelcomeInfo: React.FC<WelcomeInfoProps> = ({
	heading,
	paragraph,
}) => (
	<section>
		<h3>{heading}</h3>
		<p>{paragraph}</p>
	</section>
)
