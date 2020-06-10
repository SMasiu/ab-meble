import React from 'react'
import { ExpandNavWrapper } from './expand-nav.style'

interface ExpandNavProps {
	open: boolean
}

export const ExpandNav: React.FC<ExpandNavProps> = ({ open }) => (
	<ExpandNavWrapper open={open}>
		<nav></nav>
	</ExpandNavWrapper>
)
