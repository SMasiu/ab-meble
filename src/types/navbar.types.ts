export interface NavbarItem {
	name: string
	to?: string
	action?: () => void
}

export type NavbarItems = NavbarItem[]
