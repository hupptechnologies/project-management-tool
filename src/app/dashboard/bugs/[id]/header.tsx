'use client';
import { ArrowLeft } from 'lucide-react';
import ActionDropdown from './actionDropdown';
import { ASSIGN_OPTION, STATUS_OPTION } from '@/constants';

export default function BugDetailHeader({
	id,
	onBack,
}: {
	id: string;
	onBack: () => void;
}) {
	return (
		<div className="flex items-center justify-between">
			<button
				onClick={onBack}
				className="flex items-center text-[10px] text-gray-600 hover:text-black transition"
			>
				<ArrowLeft size={12} className="mr-1" />
				<h6 className="text-[14px] font-bold text-gray-900">
					🐞 Bug Report #{id}
				</h6>
				<span className="text-[10px] mx-2 px-2 py-1 bg-gray-100 text-yellow-800 rounded">
					Mobile App
				</span>
			</button>
			<div className="flex items-center space-x-2">
				<span className="text-[8px] px-2 py-1 border border-gray-200 text-gray-800 rounded">
					2025-05-06 10:31
				</span>
				<span className="text-[8px] px-2 py-1 border border-gray-200 text-yellow-800 rounded">
					In Progress
				</span>
				<ActionDropdown
					assignOptions={ASSIGN_OPTION}
					statusOptions={STATUS_OPTION}
				/>
			</div>
		</div>
	);
}
