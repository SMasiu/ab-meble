import React from 'react'
import { ReferencesWrapper } from './references.style'
import { Reference } from 'components/molecules/reference/reference'
import { Refs } from 'types/references.type'

const refs: Refs[] = [
	{
		imagePath: 'references/ref1.jpg',
		companyName: 'Philips',
		companyLogoPath: 'logo.svg',
		projectImagePath: 'project1.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
	},
	{
		imagePath: 'references/ref2.jpg',
		companyName: 'Rowimed',
		companyLogoPath: 'logo.svg',
		projectImagePath: 'project2.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
	},
	{
		imagePath: 'references/ref3.jpg',
		companyName: 'Rowimed',
		companyLogoPath: 'logo.svg',
		projectImagePath: 'project3.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
	},
	{
		imagePath: 'references/ref4.jpg',
		companyName: 'Rowimed',
		companyLogoPath: 'logo.svg',
		projectImagePath: 'project4.jpg',
		quotation: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
		reprehenderit voluptates assumenda officia. Quo excepturi, voluptas dolore
		incidunt corrupti ut tempora nostrum? Sequi suscipit ut corrupti quia
		nostrum? Explicabo voluptates odit excepturi dicta molestias error molestiae
		laborum laboriosam a rerum iste, consequuntur veniam architecto dolor
		labore, recusandae at, ad ducimus?`,
	},
	{
		imagePath: 'references/ref5.jpg',
		companyName: 'Rowimed',
		companyLogoPath: 'logo.svg',
		projectImagePath: 'project5.jpg',
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
