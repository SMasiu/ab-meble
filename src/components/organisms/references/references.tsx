import React from 'react'
import { ReferencesWrapper } from './references.style'
import { Reference } from 'components/molecules/reference/reference'
import { Refs } from 'types/references.type'

const refs: Refs[] = [
	{
		imagePath: 'references/ref1.jpg',
		companyName: 'Elvita',
		companyLogoPath: 'references/logo1.jpg',
		projectImagePath: 'references/project1.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
	},
	{
		imagePath: 'references/ref2.jpg',
		companyName: 'Vobis',
		companyLogoPath: 'references/logo2.png',
		projectImagePath: 'references/project2.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
	},
	{
		imagePath: 'references/ref3.jpg',
		companyName: 'Urząd miejski w Zabrzu',
		companyLogoPath: 'references/logo3.png',
		projectImagePath: 'references/project3.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
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
