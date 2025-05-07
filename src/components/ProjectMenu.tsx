import { ProjectItem } from '@/lib/types';
import Link from 'next/link';
import React from 'react';

export default function ProjectMenu() {
	const projectList: ProjectItem[] = [
		{ label: 'Mobile App', href: '#1', color: 'bg-blue-500' },
		{
			label: 'Website Redesign',
			href: '#2',
			color: 'bg-green-500',
		},
		{ label: 'Design System', href: '#3', color: 'bg-red-500' },
		{ label: 'Wireframes', href: '#4', color: 'bg-yellow-500' },
	];

	return (
		<>
			<div className="my-2 h-0.5 bg-gray-200" />
			<h6 className="text-[8px] tracking-tight text-black whitespace-nowrap">
				My projects
			</h6>
			<div className="my-2 h-0.5 bg-gray-200" />
			<nav className="space-y-2 text-sm text-gray-700">
				{projectList.map((item) => {
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`group flex items-center gap-2 px-2 py-0.5 rounded-x transition-all duration-300 relative 
					hover:bg-gray-100 
                    ${item.color}}
				`}
						>
							<div className={`h-1 w-1 ${item.color} rounded-full`} />
							{/* Label */}
							<span
								className={`transition-all 
												text-[8px]
												duration-300 overflow-hidden whitespace-nowrap
						   'opacity-100 w-auto'
					`}
							>
								{item.label}
							</span>
						</Link>
					);
				})}
			</nav>
		</>
	);
}
