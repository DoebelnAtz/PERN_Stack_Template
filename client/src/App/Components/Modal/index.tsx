import React, {
	RefObject,
	SyntheticEvent,
	useEffect,
} from 'react';
import {
	OutsideDiv,
	InsideDiv,
	ModalContent,
	ModalButtonsRow,
	CloseButton,
	OutsideContainer,
} from './Styles';

type ModalProps = {
	inside: RefObject<HTMLDivElement>;
	close: () => void;
};

const Modal: React.FC<ModalProps> = ({
	children,
	inside,
	close,
}) => {

	return (
		<OutsideContainer>
			<OutsideDiv>
				<InsideDiv
					id={'modal-inside'}
					ref={inside}
				>
					<ModalButtonsRow>
						<CloseButton onClick={close}>
							<span>✕</span>
						</CloseButton>
					</ModalButtonsRow>
					<ModalContent id={'modal-content'}>
						{children}
					</ModalContent>
				</InsideDiv>
			</OutsideDiv>
		</OutsideContainer>
	);
};

export default Modal;
