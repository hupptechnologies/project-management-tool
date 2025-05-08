'use client';

import { ACTION_LIST } from '@/constants';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

type Props = {
	assignOptions: string[];
	statusOptions: string[];
};

type DropdownType = 'actions' | 'assign' | 'status' | null;

export default function ActionDropdown({
	assignOptions,
	statusOptions,
}: Props) {
	const actionRef = useRef<HTMLDivElement>(null);
	const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
	const [selectedAssign, setSelectedAssign] = useState<string | null>(null);
	const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				actionRef.current &&
				!actionRef.current.contains(event.target as Node)
			) {
				setOpenDropdown(null);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleMainClick = () => {
		setOpenDropdown((prev) => (prev === 'actions' ? null : 'actions'));
	};

	const handleSubDropdown = (type: DropdownType) => {
		setOpenDropdown((prev) => (prev === type ? null : type));
	};

	return (
		<div className="relative" ref={actionRef}>
			<p
				onClick={handleMainClick}
				className="px-4 py-1 text-[8px] bg-gray-50 hover:bg-gray-100 text-black border border-gray-200 rounded flex items-center gap-1 cursor-pointer"
			>
				Action <ChevronDown size={10} />
			</p>

			{/* Action Dropdown */}
			{openDropdown === 'actions' && (
				<div className="absolute right-0 mt-1 z-40 bg-white border border-gray-200 rounded shadow-md w-44">
					<ul className="text-[10px] text-gray-800 divide-y divide-gray-100">
						{ACTION_LIST.map(({ name, icon: Icon }) => (
							<li
								key={name}
								className="px-3 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2"
								onClick={() =>
									name === 'Assign to'
										? handleSubDropdown('assign')
										: setOpenDropdown(null)
								}
							>
								<Icon size={12} /> {name}
							</li>
						))}
						<li
							className="px-3 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2"
							onClick={() => handleSubDropdown('status')}
						>
							<CheckCircle size={12} /> Change to Status
						</li>
					</ul>
				</div>
			)}

			{/* Assign Dropdown */}
			{openDropdown === 'assign' && (
				<div className="absolute right-full mr-2 top-0 z-50 bg-white border border-gray-200 rounded shadow-md w-44">
					<ul className="text-[10px] text-gray-800">
						{assignOptions.map((name) => (
							<li
								key={name}
								className={`px-3 py-2 hover:bg-red-50 cursor-pointer flex justify-between ${selectedAssign === name ? 'bg-red-100' : ''}`}
								onClick={() => {
									setSelectedAssign((prev) => (prev === name ? null : name));
									setOpenDropdown(null);
								}}
							>
								<span>{name}</span>
								{selectedAssign === name && (
									<CheckCircle size={10} className="text-yellow-600" />
								)}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Status Dropdown */}
			{openDropdown === 'status' && (
				<div className="absolute right-full mr-2 top-10 z-50 bg-white border border-gray-200 rounded shadow-md w-44">
					<ul className="text-[10px] text-gray-800">
						{statusOptions.map((status) => (
							<li
								key={status}
								className={`px-3 py-2 hover:bg-red-50 cursor-pointer flex justify-between ${selectedStatus === status ? 'bg-red-100' : ''}`}
								onClick={() => {
									setSelectedStatus((prev) =>
										prev === status ? null : status
									);
									setOpenDropdown(null);
								}}
							>
								<span>{status}</span>
								{selectedStatus === status && (
									<CheckCircle size={10} className="text-yellow-600" />
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
