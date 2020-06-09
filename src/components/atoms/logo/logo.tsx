import React from 'react'
import { LogoWrapper, LogoAB, LogoName } from './logo.styles'

export const Logo = () => (
	<LogoWrapper>
		<LogoAB>
			<img src={'/logo.svg'} alt="logo" />
		</LogoAB>
		<LogoName>Meble</LogoName>
	</LogoWrapper>
)
