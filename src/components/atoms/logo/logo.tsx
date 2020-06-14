import React from 'react'
import { LogoAB } from './logo.styles'

interface LogoProps {
	expanded: boolean
}

export const Logo: React.FC<LogoProps> = ({ expanded }) => (
	<LogoAB expanded={expanded}>
		<img src={'logo.svg'} alt="logo" />
	</LogoAB>
)
