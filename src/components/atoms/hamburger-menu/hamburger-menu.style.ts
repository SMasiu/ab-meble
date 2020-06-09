import styled, { css } from "styled-components";
import { ThemeProps } from 'types/theme.types'

export const HamburgerMenuWrapper = styled.div`
    width: 30px;
    height: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
`

export const HamburgerItem = styled.div`
    height: 2px; 
    border-radius: 2px;
    width: 100%;
    ${({ theme }: ThemeProps) => css`
        background-color: ${theme.colors.dark300};
    `}
`

export const HamburgerItemTop = styled(HamburgerItem)`
    width: 100%;
`

export const HamburgerItemCenter = styled(HamburgerItem)`
    width: 70%;
`

export const HamburgerItemBottom = styled(HamburgerItem)`
    width: 90%;
`