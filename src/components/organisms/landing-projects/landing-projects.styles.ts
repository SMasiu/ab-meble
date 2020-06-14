import styled from 'styled-components'

export const LandingProjectsOuterWrapper = styled.section`
	min-height: 1600px;
	height: 2vh;
`

export const LandingProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: repeat(3, minmax(400px, 1fr));
	grid-template-areas:
		'image-name-wrapper-1 image-wrapper-1 article-wrapper-1'
		'image-name-wrapper-2 . .'
		'image-name-wrapper-3 image-wrapper-2 article-wrapper-2';
`

export const ImageNameWrapper = styled.section``

export const ImageNameWrapper1 = styled(ImageNameWrapper)`
	grid-area: image-name-wrapper-1;
`

export const ImageNameWrapper2 = styled(ImageNameWrapper)`
	grid-area: image-name-wrapper-2;
`

export const ImageNameWrapper3 = styled(ImageNameWrapper)`
	grid-area: image-name-wrapper-3;
`

export const ImageWrapper = styled.section``

export const ImageWrapper1 = styled(ImageWrapper)`
	grid-area: image-wrapper-1;
`

export const ImageWrapper2 = styled(ImageWrapper)`
	grid-area: image-wrapper-2;
`

export const ArticleWrapper = styled.article``

export const ArticleWrapper1 = styled(ArticleWrapper)`
	grid-area: article-wrapper-1;
`

export const ArticleWrapper2 = styled(ArticleWrapper)`
	grid-area: article-wrapper-2;
`
