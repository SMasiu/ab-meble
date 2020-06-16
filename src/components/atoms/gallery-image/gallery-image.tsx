import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { GalleryImageWrapper, GalleryImageContent } from './gallery-image.style'

interface GalleryImageProps {
	url: string
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ url }) => {
	const [visible, setVisible] = useState(false)

	const handleVisibleChange = (vis: boolean) => {
		if (vis) {
			setVisible(vis)
		}
	}

	return (
		<VisibilitySensor
			onChange={handleVisibleChange}
			partialVisibility={true}
			scrollCheck={!visible}
		>
			<GalleryImageWrapper>
				<GalleryImageContent url={url} visible={visible} />
			</GalleryImageWrapper>
		</VisibilitySensor>
	)
}
