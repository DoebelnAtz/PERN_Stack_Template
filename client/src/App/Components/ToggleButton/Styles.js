import styled from 'styled-components';
import { color, cursor } from '../../../Styles';
import { animated } from 'react-spring';

export const ButtonContainer = styled(animated.div)`
	height: 22px;
	width: 62px;
	border-radius: 5px;
	border: 2px solid ${color.b700};
	background-color: ${color.b500};
`;

export const Slider = styled(animated.div)`
	height: 22px;
	position: relative;
	border-radius: 2px;
	${cursor.clickable};
	width: 44px;
	background-color: ${color.b900};
`;
