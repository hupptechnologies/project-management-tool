'use client';
import React, { useState } from 'react';
import { PROJECT_FILTER } from '@/constants';

export default function ProjectFilter() {
	const [selectedFilter, setSelectedFilter] = useState<string>('All');

	return (
		<div className="flex gap-2 overflow-x-auto border-b border-gray-200 py-2">
			<div className="flex gap-2 overflow-x-auto border-b border-gray-200 pb-2 whitespace-nowrap">
				{PROJECT_FILTER.map((item) => {
					const isActive = selectedFilter === item.label;
					return (
						<button
							key={item.label}
							onClick={() => setSelectedFilter(item.label)}
							className={`text-[8px] px-3 py-1 rounded-[2px] transition font-medium
          ${
						isActive
							? 'bg-black text-white'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
					}`}
						>
							{item.label} ({item.count})
						</button>
					);
				})}
			</div>
		</div>
	);
}
