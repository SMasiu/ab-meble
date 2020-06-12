import React from 'react'
import {
	FormWrapper,
	InputGroup,
	InputLabel,
	SubmitWrapper,
} from './footer-contact-form.styles'
import { Input } from 'components/atoms/input/input'
import { Textarea } from 'components/atoms/textarea/textarea'
import { Submit } from 'components/atoms/submit/submit'

export const FooterContactForm = () => (
	<FormWrapper>
		<InputGroup>
			<InputLabel htmlFor="name">Imię i Nazwisko</InputLabel>
			<Input id="name" placeholder="Twoje imię" />
		</InputGroup>
		<InputGroup>
			<InputLabel htmlFor="email">Email</InputLabel>
			<Input id="email" placeholder="imie@example.com" />
		</InputGroup>
		<InputGroup>
			<InputLabel htmlFor="message">Wiadomość</InputLabel>
			<Textarea id="message" rows={5} placeholder="Wiadomość do nas" />
		</InputGroup>
		<SubmitWrapper>
			<Submit />
		</SubmitWrapper>
	</FormWrapper>
)
