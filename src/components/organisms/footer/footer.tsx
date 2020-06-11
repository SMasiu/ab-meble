import React from 'react'
import {
	FooterWrapper,
	ContactData,
	ContactForm,
	FooterOuterWrapper,
	ContactParagraph,
	CopyRight,
	ContactDataSection,
} from './footer.styles'
import { FooterContactForm } from 'components/molecules/footer-contact-form/footer-contact-form'

export const Footer = () => (
	<FooterOuterWrapper>
		<FooterWrapper>
			<ContactData>
				<ContactDataSection>
					<h2>Kontakt</h2>
					<ContactParagraph>Email: some.email@gmail.com</ContactParagraph>
					<ContactParagraph>Telefon: +45 284282303</ContactParagraph>
				</ContactDataSection>
				<ContactDataSection>
					<h2>Adres</h2>
					<ContactParagraph>Zabrze ul Chorzowska 12</ContactParagraph>
				</ContactDataSection>
				<ContactDataSection>
					<h2>Godziny otwarcia</h2>
					<ContactParagraph>Pon-Pt: 8:00 - 16:00</ContactParagraph>
				</ContactDataSection>
			</ContactData>
			<ContactForm>
				<h1>Napisz do nas</h1>

				<FooterContactForm />
			</ContactForm>
		</FooterWrapper>
		<CopyRight>&copy; AB Meble 2020</CopyRight>
	</FooterOuterWrapper>
)
