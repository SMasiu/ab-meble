import React from 'react'
import {
	FooterWrapper,
	ContactData,
	ContactForm,
	FooterOuterWrapper,
	ContactParagraph,
} from './footer.styles'
import { FooterContactForm } from 'components/molecules/footer-contact-form/footer-contact-form'

export const Footer = () => (
	<FooterOuterWrapper>
		<FooterWrapper>
			<ContactData>
				<section>
					<h2>Kontakt</h2>
					<ContactParagraph>Email: some.email@gmail.com</ContactParagraph>
					<ContactParagraph>Telefon: +45 284282303</ContactParagraph>
				</section>
				<section>
					<h2>Adres</h2>
					<ContactParagraph>Zabrze ul Chorzowska 12</ContactParagraph>
				</section>
				<section>
					<h2>Godziny otwarcia</h2>
					<ContactParagraph>Pon-Pt: 8:00 - 16:00</ContactParagraph>
				</section>
			</ContactData>
			<ContactForm>
				<h1>Napisz do nas</h1>

				<FooterContactForm />
			</ContactForm>
		</FooterWrapper>
	</FooterOuterWrapper>
)
