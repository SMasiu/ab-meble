import styled from 'styled-components'

export const GalleryWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: 500px;
	grid-auto-flow: dense;
	align-content: stretch;
	gap: 10px;
	padding: 60px 10px 10px 10px;

	@media screen and (max-width: 1920px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: 1400px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 1000px) {
		grid-auto-rows: 400px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 550px) {
		grid-auto-rows: 300px;
		grid-template-columns: 1fr;
	}
`
