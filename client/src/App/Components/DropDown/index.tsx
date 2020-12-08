import { useDismiss } from '../../../Hooks';
import { capitalizeFirst } from '../../../Utils';
import {
	DropDown,
	DropDownList,
	Option,
	CurrentOption,
	SearchInput,
} from './Styles';
import React, { useEffect, useRef, useState } from 'react';

import dropdownIcon from '../../../assets/images/dropdown.png';

type DropDownProps = {
	state: string | { option: string; id?: number };
	// function that takes a string input and is run on option change
	setSelect: (newOption: {
		option: string;
		id?: number;
	}) => void;
	// provided list of options
	optionList: { option: string; id?: number }[];
	// Component height and width
	width?: string;
	height?: string;
	// Optional text snippet that prepends currently selected option
	// ex: text = 'sort by: , state = 'popular'
	// component would read sort by: popular
	text?: string;
	withFilter?: boolean;
	// in cases where we want the drop down to overflow a modal
	// the drop down list has to be fixed. the only use case for this is in the taskinfo modal
	// but this causes problems in scrolling pages like resources / forum / projects
	modalOverflow?: boolean;
	// optional function for filter change takes in filter value as arg returning filtered options
	onFilterChange?: (arg: string) => any[];
};

const DropDownComponent: React.FC<DropDownProps> = ({
	state,
	setSelect,
	optionList,
	width = '100px',
	height = '28px',
	children,
	text,
	withFilter = false,
	modalOverflow = false,
	onFilterChange,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [options, setOptions] = useState(optionList);
	const [filterInput, setFilterInput] = useState('');
	const inside = useRef<HTMLDivElement>(null);
	const filterInputRef = useRef<HTMLInputElement>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const renderOptions = () => {
		return options.map(
			({ option, id }, index: number) => {
				return (
					<Option
						title={option}
						key={index}
						height={height}
						highlighted={
							state === option ||
							(withFilter &&
								index === selectedIndex)
						}
						onClick={(e: MouseEvent) => {
							e.stopPropagation();
							setSelect({ option, id });
							setExpanded(false);
						}}
					>
						{option}
					</Option>
				);
			},
		);
	};

	useDismiss(inside, () => setExpanded(false));

	// make sure input field is focused when user click on dropdown.
	useEffect(() => {
		if (filterInputRef && expanded) {
			filterInputRef.current?.focus();
		}
	}, [expanded]);

	// we copy the optionList to a state, here we make sure it updates when the
	// input changes
	useEffect(() => {
		setOptions(optionList);
	}, [optionList.length]);

	// Filter options
	const handleFilterChange = (
		e: React.SyntheticEvent,
	) => {
		let target = e.target as HTMLInputElement;
		setFilterInput(target.value);
		onFilterChange
			? setOptions(onFilterChange(target.value))
			: setOptions(
					optionList.filter(({ option }) => {
						return option
							.toLowerCase()
							.includes(
								target.value.toLowerCase(),
							);
					}),
			  );
	};

	const handleEnterPress = (e: React.KeyboardEvent) => {
		if (
			e.key === 'Enter' &&
			options.length > selectedIndex
		) {
			setSelect(options[selectedIndex]);
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (selectedIndex < options.length - 1) {
				setSelectedIndex(selectedIndex + 1);
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (selectedIndex > 0) {
				setSelectedIndex(selectedIndex - 1);
			}
		}
	};

	const handleClick = (e: MouseEvent) => {
		e.stopPropagation();
		setExpanded(!expanded);
	};

	return (
		<DropDown
			expanded={expanded}
			ref={inside}
			width={width}
			height={height}
		>
			<CurrentOption
				expanded={expanded}
				onClick={(e: MouseEvent) => handleClick(e)}
				height={height}
			>
				{children}
				<span>{state}</span>
				<img src={dropdownIcon} alt={'v'} />
			</CurrentOption>
			{expanded && (
				<DropDownList
					modalOverflow={modalOverflow}
					width={width}
					height={height}
				>
					{withFilter && (
						<SearchInput
							ref={filterInputRef}
							placeholder={'filter'}
							onChange={(
								e: React.SyntheticEvent,
							) => handleFilterChange(e)}
							onKeyDown={(
								e: React.KeyboardEvent,
							) => handleEnterPress(e)}
							value={filterInput}
						/>
					)}
					{renderOptions()}
				</DropDownList>
			)}
		</DropDown>
	);
};

export default DropDownComponent;
