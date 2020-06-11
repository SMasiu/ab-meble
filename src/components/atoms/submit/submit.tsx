import React from 'react'
import { SubmitWrapper, SubmitText } from './submit.style'
import { ArrowButton } from '../arrow-button/arrow-button'

export const Submit = () => (
	<SubmitWrapper type="submit">
		<SubmitText>Wyślij</SubmitText>
		<ArrowButton />
	</SubmitWrapper>
)
