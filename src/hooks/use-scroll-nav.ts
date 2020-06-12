import { useState, useEffect } from 'react'

export const useScrollNav = (): boolean => {
	const [expandedNav, setExpandedNav] = useState(true)

	const changeAt = 100

	const handleScroll = () => {
		const toTop: number = window.scrollY
		if (toTop > changeAt) {
			setExpandedNav(false)
		} else if (toTop < changeAt) {
			setExpandedNav(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return expandedNav
}
