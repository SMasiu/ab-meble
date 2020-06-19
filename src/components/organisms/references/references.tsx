import React from 'react'
import { ReferencesWrapper } from './references.style'
import { Reference } from 'components/molecules/reference/reference'
import { Refs } from 'types/references.type'

const refs: Refs[] = [
	{
		imagePath: 'references/ref1.jpg',
		companyName: '',
		companyLogoPath: '',
		quotation: '',
	},
	{
		imagePath: 'references/ref2.jpg',
		companyName: '',
		companyLogoPath: '',
		quotation: '',
	},
	{
		imagePath: 'references/ref3.jpg',
		companyName: '',
		companyLogoPath: '',
		quotation: '',
	},
	{
		imagePath: 'references/ref4.jpg',
		companyName: '',
		companyLogoPath: '',
		quotation: '',
	},
	{
		imagePath: 'references/ref5.jpg',
		companyName: '',
		companyLogoPath: '',
		quotation: '',
	},
]

export const References = () => (
	<ReferencesWrapper>
		{console.log(refs)}
		{refs.map((ref, i) => (
			<Reference reference={ref} key={i} index={i} />
		))}
	</ReferencesWrapper>
)
