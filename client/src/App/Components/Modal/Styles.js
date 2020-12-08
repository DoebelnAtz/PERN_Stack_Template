import styled from 'styled-components';

import {
	color,
	layout,
	cursor,
	colorAdjust,
} from '../../../Styles';

export const OutsideContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

`;

export const OutsideDiv = styled.div`
	position: sticky;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 11;
`;

export const InsideDiv = styled.div`
	margin: auto auto auto auto;
	max-height: 80vh;
	border: 5px solid ${color.b100};
	background: ${color.p500};
	overflow: auto;
	z-index: 10;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	overflow: unset;
	border-color: ${color.p500};
`;

export const ModalButtonsRow = styled.div`
	${layout.row};
	height: 40px;
	background-color: ${color.p500};
`;

export const CloseButton = styled.span`
	${cursor.clickable};
	font-size: 28px;
	color: ${color.t500};
	line-height: 40px;
	font-weight: 600;
	margin-left: auto;
	margin-right: 10px;
		transition: color 0.2s;
	&:hover {
		color: ${colorAdjust.darken(color.p500, 0.2)};
	}
`;

export const ModalContent = styled.div`
	overflow-x: hidden;
	border-top: 4px solid ${color.b100};
	max-height: 70vh;
`;
