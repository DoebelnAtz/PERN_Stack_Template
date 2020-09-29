import styled, { css } from 'styled-components';
import Color from 'color';

const baseColor = '#161616';

export const colorAdjust = {
	darken: (color, amount) =>
		Color(color)
			.darken(amount)
			.string(),
	lighten: (color, amount) =>
		Color(color)
			.lighten(amount)
			.string(),
	rgba: (color, opacity) =>
		Color(color)
			.alpha(opacity)
			.string(),
};

export const color = {
	primary: '#AC7BC2',
	primaryShade: colorAdjust.darken('#0064FF', 0.2),
	secondary: '#E0AB79',
	secondaryShade: colorAdjust.darken('#FF684F', 0.2),
	tertiary: '#86D889',
	tertiaryShade: colorAdjust.darken('#FFE8D8', 0.1),
	BG0: baseColor,
	BG1: colorAdjust.darken(baseColor, 0.05),
	BG2: colorAdjust.darken(baseColor, 0.1),
	BG3: colorAdjust.darken(baseColor, 0.15),
	BG4: colorAdjust.darken(baseColor, 0.2),
	BG5: colorAdjust.darken(baseColor, 0.25),
	textColor: colorAdjust.lighten(baseColor, 0.15),
};

export const units = {
	margin: '10px',
	radius: '4px'
};

export const font = {
	title: css`
		font-size: 36px;
		letter-spacing: 2px;
	`,
	text: css`
		font-size: 14px;
		letter-spacing: 1px;
	`,
	link: css`
		text-decoration: none;
		&:hover {
			color: ${colorAdjust.darken(color.tertiary, 0.2)};
		}
	`,
};

export const layout = {
	row: css`
		display: flex;
		flex-wrap: wrap;
	`,
	col: css`
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
	`,
	centered: css`
		margin-left: auto;
		margin-right: auto;
	`,
};

export const border = {
	setBorders: (top, right, bot, left, color) =>
		css`
			border-color: ${color};
			border-style: solid;
			border-width: ${top}px ${right}px ${bot}px ${left}px;
		`,
};

export const modal = {
	inside: css`
		position: absolute;
		left: 20%;
		right: 20%;
		top: 15%;
		max-height: 80vh;
		padding: ${length.margin};
		border: 5px solid ${color.BG2};
		border-radius: 2px;
		margin: auto;
		background: ${color.BG2};
		overflow: auto;
		z-index: 10;
		${layout.col};
	`,
	outside: css`
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 11;
	`,
};

export const cursor = {
	clickable: css`
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
	`,
	draggable: css`
		cursor: grab;
		user-select: none;
	`,
	dragging: css`
		cursor: grabbing;
	`,
	notAllowed: css`
		cursor: not-allowed;
		user-select: none;
	`,
};

export const components = {
	input: css`
		border-radius: 4px;
		padding-left: 10px;
		background-color: ${color.BG1};
		color: ${color.primary};
		height: 36px;
		font-size: 16px;
		border: 1px solid ${color.primary};
		&:focus {
			outline: none;
			border: 1px solid ${colorAdjust.darken(color.primary, 0.2)};
		}
	`,
	animatedLabeledInput: css`
		position: relative;
		overflow: hidden;
		height: 66px;
		& input {
			width: 100%;
			height: 100%;
			color: ${color.primary};
			padding-top: 20px;
			border: none;
			outline: none;
			&:focus + label::after {
				transform: translateX(0%);
			}
			&:valid + label::after {
				transform: translateX(0%);
			}
			&:focus + label span {
				transform: translateY(-100%);
			}
			&:valid + label span {
				transform: translateY(-100%);
			}
		}

		& label {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
			border-bottom: 2px solid ${color.tertiary};
		}

		& label::after {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			bottom: -2px;
			transition: all 0.3s ease;
			border-bottom: 2px solid ${color.secondary};
			transform: translateX(-100%);
		}
		& label span {
			position: absolute;
			bottom: 5px;
			${font.DCBold};
			color: ${color.header};
			font-size: 18px;
			transition: all 0.3s ease;
		}
	`,
	button: css`
		padding: 2px 7px;
		height: 36px;
		letter-spacing: 1px;
		line-height: 30px;
		${font.text};
		background-color: ${color.BG2};
		${cursor.clickable};
		border: 1px solid ${color.primary};
		border-radius: ${length.radius};
		transition: background-color 0.1s;
		font-size: 14px;
		&:focus {
			outline: none;
		}
		&:hover {
			background-color: ${colorAdjust.darken(color.BG2, 0.1)};
		}
	`,
};

