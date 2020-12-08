import styled, { css } from 'styled-components';
import Color from 'color';
import Config from '../Config'

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
	p500: '#4062BB',
	p700: colorAdjust.darken(Config.colors.p500, 0.1),
	p900: colorAdjust.darken(Config.colors.p500, 0.2),
	p300: colorAdjust.lighten(Config.colors.p500, 0.1),
	p100: colorAdjust.lighten(Config.colors.p500, 0.2),
	s500: '#EB5E55',
	s700: colorAdjust.darken(Config.colors.s500, 0.1),
	s900: colorAdjust.darken(Config.colors.s500, 0.2),
	s100: colorAdjust.lighten(Config.colors.s500, 0.2),
	s300: colorAdjust.lighten(Config.colors.s500, 0.1),
	t500: '#629677',
	t700: colorAdjust.darken(Config.colors.t500, 0.1),
	t900: colorAdjust.darken(Config.colors.t500, 0.2),
	t300: colorAdjust.lighten(Config.colors.t500, 0.1),
	t100: colorAdjust.lighten(Config.colors.t500, 0.2),
	b500: '#EBEBEB',
	b700: colorAdjust.darken(Config.colors.b500, 0.1),
	b900: colorAdjust.darken(Config.colors.b500, 0.2),
	b300: colorAdjust.lighten(Config.colors.b500, 0.1),
	b100: colorAdjust.lighten(Config.colors.b500, 0.2),
	d500: '#EBEBEB',
	d700: colorAdjust.darken(Config.colors.d500, 0.1),
	d900: colorAdjust.darken(Config.colors.d500, 0.2),
	d300: colorAdjust.lighten(Config.colors.d500, 0.1),
	d100: colorAdjust.lighten(Config.colors.d500, 0.2),
};

export const units = {
	xs: '10px',
	s: '14px',
	m: '20px',
	l: '28px',
	xl: '38px',
};

export const font = {
	RCBold: css`
		font-family: roboto-condensed-bold, sans-serif;
	`,
	RCReg: css`
		font-family: roboto-condensed-regular, sans-serif;
	`,
	RCLight: css`
		font-family: roboto-condensed-light, sans-serif;
	`,
	RReg: css`
		font-family: roboto-regular, sans-serif;
	`,
	RBold: css`
		font-family: roboto-bold, sans-serif;
	`,
	BBold: css`
		font-family: 'Libre Baskerville', serif;
	`,
	title: css`
		font-size: 36px;
		letter-spacing: 2px;
	`,
	text: css`
		font-size: 20px;
		font-family: roboto-regular, sans-serif;
		letter-spacing: 0.5px;
		color: ${color.p500};
	`,
	error: css`
		font-size: 18px;
		font-family: din-condensed-bold, sans-serif;
		color: ${color.s900} !important;
	`,
	link: css`
		text-decoration: none;
		&:hover {
			color: ${colorAdjust.darken(
				color.t500,
				0.2,
			)};
		}
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
		${font.RCReg};
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: ${color.t500};
		border: none;
		caret-color: ${color.p500};
		caret-shape: block;
		color: ${color.p500};
		padding: 2px 6px;
		font-size: 16px;
		border-radius: 0;
		box-shadow: none;
		&:focus {
			outline: none;
		}
	`,
	animatedLabeledInput: css`
		position: relative;
		overflow: hidden;
		height: 66px;
		& input {
			width: 100%;
			height: 100%;
			font-size: 16px;
			color: ${color.text};
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
			&:-webkit-autofill,
			:-webkit-autofill:focus {
				background-color: ${color.b100};
				-webkit-box-shadow: 0 0 0 1000px
					${color.b100} inset !important;
			}

			&:-webkit-autofill + label span {
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
			border-bottom: 2px solid ${color.s700};
		}

		& label::after {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			bottom: -2px;
			transition: all 0.3s ease;
			border-bottom: 2px solid ${color.s500};
			transform: translateX(-100%);
		}
		& label span {
			position: absolute;
			bottom: 5px;
			${font.RCBold};
			color: ${color.header};
			font-size: 18px;
			transition: all 0.3s ease;
		}
	`,
	labeledInput: css`
		${font.RCBold};
		font-size: 20px;
		color: ${color.p500};
		display: flex;
		flex-direction: column;
		margin: 10px 0;
		& input {
			font-size: 16px;
			border-radius: 0;
			${font.RCReg};
			box-shadow: none;
			background-color: ${color.t500};
			border: none;
			caret-color: ${color.p500};
			caret-shape: block;
			color: ${color.p500};
			padding: 2px 6px;
		}
		& input:focus {
			outline: none;
		}
		& textarea {
			background-color: ${color.t500};
			border: none;
			font-size: 16px;
			border-radius: 0;
			box-shadow: none;
			padding: 6px;
			resize: vertical;
		}
		& textarea:focus {
			outline: none;
		}
	`,
	button: css`
		padding: 2px 12px;
		letter-spacing: 1px;
		${font.RCBold};
		height: 30px;
		text-transform: uppercase;
		font-size: 20px;
		line-height: 30px;
		flex-shrink: 0;
		background-color: ${color.b100};
		${cursor.clickable};
		border: 2px solid ${color.p500};
		transition: background-color 0.1s;
		color: ${color.p500};
		&:focus {
			outline: none;
		}
		&:hover,
		:active {
			background-color: ${colorAdjust.darken(
				color.b100,
				0.1,
			)};
		}
		&:disabled {
			color: ${color.p500}90;
			border-color: ${color.p500}90;
			${cursor.notAllowed};
		}
		&:disabled:hover {
			color: ${color.p500}90;
			border-color: ${color.p500}90;
			${cursor.notAllowed};
			background-color: white;
		}
	`,
	buttonInvert: css`
		padding: 2px 12px;
		letter-spacing: 1px;
		${font.RCBold};
		text-transform: uppercase;
		height: 30px;
		font-size: 20px;
		line-height: 30px;
		background-color: ${color.p500};
		${cursor.clickable};
		border: 2px solid ${color.b100};
		transition: background-color 0.1s;
		color: ${color.b100};
		&:focus {
			outline: none;
		}
		&:hover {
			background-color: ${colorAdjust.darken(
				color.p500,
				0.1,
			)};
		}
		&:disabled {
			color: ${color.p500}90;
			border-color: ${color.p500}90;
			${cursor.notAllowed};
		}
		&:disabled:hover {
			color: ${color.p500}90;
			border-color: ${color.p500}90;
			${cursor.notAllowed};
			background-color: white;
		}
	`,
};
