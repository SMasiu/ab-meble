export interface NavbarItem {
	name: string
	to?: string
	actionIfPageAs?: string
	action?: () => void
}

export type NavbarItems = NavbarItem[]
