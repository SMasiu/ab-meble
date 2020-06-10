import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	z-index: 9000;
	position: fixed;
	top: 0;
	width: 100vw;
	min-height: 75px;
	padding: 5px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const HeaderNavWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const LogoWrapper = styled.div`
	z-index: 11000;
`

export const HeaderHamburgerWrapper = styled.div`
	margin-left: 15px;
	z-index: 11000;
`
