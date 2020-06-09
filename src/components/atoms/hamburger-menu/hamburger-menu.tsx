import React, { useState } from 'react'
import {
    HamburgerMenuWrapper,
    HamburgerItemWrapperTop,
    HamburgerItemWrapperCenter,
    HamburgerItemWrapperBottom,
    HamburgerItem
} from './hamburger-menu.style'

export const HamburgerMenu = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)

    return (
        <HamburgerMenuWrapper onClick={handleClick} open={open}>
            <HamburgerItemWrapperTop>
                <HamburgerItem />
            </HamburgerItemWrapperTop>
            <HamburgerItemWrapperCenter>
                <HamburgerItem />
            </HamburgerItemWrapperCenter>
            <HamburgerItemWrapperBottom>
                <HamburgerItem />
            </HamburgerItemWrapperBottom>
        </HamburgerMenuWrapper>
    )
}