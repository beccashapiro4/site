import * as React from 'react';
import { createPortal } from 'react-dom';

import { Game } from './Game';

export const DinoGame = ({
	loop = true
}) => {
	const [CSR, setCSR] = React.useState(false)
	React.useEffect(() => {
		setCSR(true)
	}, []);
	return createPortal(
		<div id='portal-balloons'>
			{CSR ? < Game {...{}} /> : null}
		</div>,
		document.body
	);
};