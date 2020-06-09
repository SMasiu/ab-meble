import styled, { css } from 'styled-components'

interface ArrowButtonWrapperProps {
	size?: string
}

export const ArrowButtonWrapper = styled.figure<ArrowButtonWrapperProps>`
	border-radius: 50%;
	padding: 5px;
	cursor: pointer;
	${({ size }: ArrowButtonWrapperProps) => {
		const s = size || '35px'
		return css`
			width: ${s};
			height: ${s};
		`
	}}
`
