export interface ThemeColors {
	light100: string
	light200: string
	light300: string
	dark100: string
	dark200: string
	dark300: string
}

export interface ThemeFontSizes {
	small: string
	medium: string
	large: string
	extraLarge: string
}

export interface Theme {
	colors: ThemeColors
	fontSizes: ThemeFontSizes
	getColor: (name: ThemeColorNames) => string
}

export interface ThemeProps {
	theme: Theme
}

export enum ThemeColorNames {
	light100 = 'light100',
	light200 = 'light200',
	light300 = 'light300',
	dark100 = 'dark100',
	dark200 = 'dark200',
	dark300 = 'dark300',
}

export enum ThemeFontSizeNames {
	small = 'small',
	medium = 'medium',
	large = 'large',
	extraLarge = 'extraLarge',
}
