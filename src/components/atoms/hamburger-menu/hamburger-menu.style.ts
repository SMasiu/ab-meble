import styled, { css } from "styled-components";
import { ThemeProps } from 'types/theme.types'

type HamburgerMenuWrapperProps = {
    open: boolean
} & ThemeProps

export const HamburgerItem = styled.div`
    height: 2px; 
    border-radius: 2px;
    width: 100%;
    transition: transform .2s;
    will-change: transform;

    ${({ theme }: ThemeProps) => css`
        background-color: ${theme.colors.dark300};
    `}
`

export const HamburgerItemWrapper = styled.div`
    transition: transform .2s;
    will-change: transform;
`

export const HamburgerItemWrapperTop = styled(HamburgerItemWrapper)`
    width: 100%;
`

export const HamburgerItemWrapperCenter = styled(HamburgerItemWrapper)`
    width: 70%;
    transform-origin: right;
`

export const HamburgerItemWrapperBottom = styled(HamburgerItemWrapper)`
    width: 90%;
`

export const HamburgerMenuWrapper = styled.div<HamburgerMenuWrapperProps>`
    width: 30px;
    height: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    
    ${({open}: HamburgerMenuWrapperProps) => open && css`
        ${HamburgerItemWrapperCenter} {
            transform: scaleX(0);
            transition: all .1s;
        }

        ${HamburgerItemWrapperTop} {
            transform: translateY(10px);

            ${HamburgerItem} {
                transform: rotate(45deg);
            }
        }

        ${HamburgerItemWrapperBottom} {
            transform: translateY(-11px);
            width: 100%;

            ${HamburgerItem} {
                transform: rotate(-45deg);
            }
        }
    `}
`