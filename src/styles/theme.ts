import { Theme, ThemeColorNames } from 'types/theme.types'

export const theme: Theme = {
	colors: {
		light100: '#fafafa',
		light200: '#f6f6f6',
		light300: '#f2f2f2',
		dark100: '#2e2e2e',
		dark200: '#242424',
		dark300: '#1c1c1c',
	},
	fontSizes: {
		small: '1.4rem',
		medium: '1.6rem',
		large: '1.8rem',
		extraLarge: '2.2rem',
	},
	getColor: (name: ThemeColorNames) => theme.colors[name],
}
