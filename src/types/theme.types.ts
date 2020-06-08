export interface ThemeColors {
	primary100: string
	primary200: string
	primary300: string
	secondary100: string
	secondary200: string
	secondary300: string
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
}

export interface Theme {
	colors: ThemeColors
	fontSizes: ThemeFontSizes
}

export interface ThemeProps {
	theme: Theme
}

export enum ThemeColorNames {
	primary100 = 'primary100',
	primary200 = 'primary200',
	primary300 = 'primary300',
	secondary100 = 'secondary100',
	secondary200 = 'secondary200',
	secondary300 = 'secondary300',
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
}
