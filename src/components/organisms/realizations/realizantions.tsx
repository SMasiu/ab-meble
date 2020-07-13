import React from 'react'
import { RealizationsWrapper } from './realizations.style'
import { Realization } from 'components/molecules/realization/realization'
import { RealizationType } from 'types/realization.types'

export interface RealizationsProps {
	realizations: RealizationType[]
}

export const Realizations: React.FC<RealizationsProps> = ({ realizations }) => {
	return (
		<RealizationsWrapper>
			{realizations.map((r, i) => (
				<Realization realization={r} key={i} index={i} />
			))}
		</RealizationsWrapper>
	)
}
