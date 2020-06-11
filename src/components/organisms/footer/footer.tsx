import React from 'react'
import {
	FooterWrapper,
	ContactData,
	ContactForm,
	FooterOuterWrapper,
} from './footer.styles'

export const Footer = () => (
	<FooterOuterWrapper>
		<FooterWrapper>
			<ContactData>
				<h2>Kontakt</h2>
			</ContactData>
			<ContactForm></ContactForm>
		</FooterWrapper>
	</FooterOuterWrapper>
)
