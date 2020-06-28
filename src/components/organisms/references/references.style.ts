import styled from 'styled-components'

export const ReferencesWrapper = styled.section`
	max-width: 1600px;
	margin: auto;
	padding: 50px 0;
	background-image: url('project5.jpg');
	background-attachment: fixed;
	background-size: cover;
	transform: translatez(0);
	-webkit-transform: translatez(0);

	& > * {
		margin: 100px 100px;
	}

	@media screen and (max-width: 800px) {
		& > * {
			margin: 50px 25px;
		}
	}

	@media screen and (max-width: 400px) {
		& > * {
			margin: 25px 10px;
		}
	}
`
