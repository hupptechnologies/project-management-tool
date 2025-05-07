'use client';
import { useState } from 'react';
import Board from '@/components/Board';
import {
	ArrowRight,
	FolderKanban,
	MoreVertical,
	Search,
	SlidersHorizontal,
	Star,
} from 'lucide-react';
import { Tab } from '@headlessui/react';

export default function KanbanPage() {
	const [selected, setSelected] = useState<string>('All');

	const projectList = [
		{
			name: 'Mobile App',
			description: 'iOS and Android development',
			color: 'bg-blue-500',
		},
		{
			name: 'Website Redesign',
			description: 'Revamp landing and about pages',
			color: 'bg-green-500',
		},
		{
			name: 'Marketing Campaign',
			description: 'Q2 product launch ads',
			color: 'bg-yellow-500',
		},
		{
			name: 'API Integration',
			description: 'Third-party auth + payments',
			color: 'bg-purple-500',
		},
		{
			name: 'Analytics Dashboard',
			description: 'Internal reporting tool',
			color: 'bg-red-500',
		},
		{
			name: 'Bug Fix Sprint',
			description: 'Resolve critical issues',
			color: 'bg-pink-500',
		},
		{
			name: 'Customer Portal',
			description: 'B2B access to orders & support',
			color: 'bg-orange-500',
		},
		{
			name: 'SEO Optimization',
			description: 'Improve Google rankings',
			color: 'bg-indigo-500',
		},
		{
			name: 'Documentation',
			description: 'Update API and user docs',
			color: 'bg-teal-500',
		},
		{
			name: 'Onboarding Flow',
			description: 'Simplify signup experience',
			color: 'bg-cyan-500',
		},
	];

	const filters = [
		{ label: 'All', count: 20 },
		{ label: 'Discussion', count: 3 },
		{ label: 'Active', count: 7 },
		{ label: 'On Hold', count: 3 },
		{ label: 'Closed', count: 7 },
	];

	const tabs = [
		{ label: 'Discussion', value: 'Discussion' },
		{ label: 'Tasks', value: 'tasks' },
		{ label: 'Timelines', value: 'Timelines' },
		{ label: 'Files', value: 'Files' },
		{ label: 'Overview', value: 'Overview' },
	];

	return (
		<div className="flex flex-row">
			<div className="w-48">
				<p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide mb-2">
					All Projects
				</p>

				<div className="flex items-center gap-2 relative">
					{/* Search Icon */}
					<Search className="absolute left-3 text-gray-500" size={8} />

					{/* Input */}
					<input
						type="text"
						placeholder="Search for projects..."
						className="pl-8 pr-8 py-1 text-black text-[8px] rounded-[2px] border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
					/>

					{/* Filter Icon */}
					<SlidersHorizontal
						className="absolute right-3 text-gray-500 cursor-pointer"
						size={8}
					/>
				</div>
				<div className="flex gap-2 overflow-x-auto border-b border-gray-200 py-2">
					<div className="flex gap-2 overflow-x-auto border-b border-gray-200 pb-2 whitespace-nowrap">
						{filters.map((item) => {
							const isActive = selected === item.label;
							return (
								<button
									key={item.label}
									onClick={() => setSelected(item.label)}
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
				<div className="h-[410px] overflow-y-auto pr-1">
					{projectList.map((project, index) => (
						<div
							key={index}
							className="my-2 rounded-[4px] border border-gray-200 shadow-sm p-1.5 
               flex items-center justify-between transition-all duration-200 
               hover:shadow-md hover:bg-gray-50 hover:scale-[1.01] cursor-pointer"
						>
							{/* Left Section */}
							<div className="flex items-center gap-3 w-full overflow-hidden">
								<div className="p-2 bg-gray-100 rounded-full shrink-0">
									<FolderKanban size={10} className="text-gray-600" />
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-1">
										<h6 className="text-black text-[10px] truncate">
											{project.name}
										</h6>
									</div>
									<p className="text-[8px] text-black truncate">
										{project.description}
									</p>
								</div>
							</div>

							{/* Right Icon */}
							<ArrowRight size={10} className="text-black shrink-0 ml-2" />
						</div>
					))}
				</div>
			</div>

			<div className="w-full h-50 px-4">
				<div
					className=" rounded-[4px] border border-gray-200  p-1.5 
               flex items-center justify-between transition-all duration-200 
               hover:shadow-md hover:bg-gray-50 hover:scale-[1.01] cursor-pointer"
				>
					{/* Left Section */}
					<div className="flex items-center gap-3 w-full overflow-hidden">
						<div className="p-2 bg-gray-100 rounded-full shrink-0">
							<FolderKanban size={10} className="text-gray-600" />
						</div>

						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2 mb-1">
								<h6 className="text-black text-[10px] truncate">Mobile app</h6>
							</div>
							<p className="text-[8px] text-black truncate">
								iOS and Android development
							</p>
						</div>
					</div>

					{/* Right Icon */}
					<Star size={10} className="text-black shrink-0 ml-2" />
					<MoreVertical size={10} className="text-black shrink-0 ml-2" />
				</div>

				<div className="my-2">
					<Tab.Group>
						<Tab.List className="flex gap-3 border-b border-gray-200 mb-4">
							{tabs.map((tab) => (
								<Tab
									key={tab.value}
									className={({ selected }) =>
										`px-4 py-0.5 text-[10px] rounded-[2px] transition-all
            ${
							selected
								? 'border-b-2 border-black text-black'
								: 'text-gray-600 hover:bg-gray-100'
						}`
									}
								>
									{tab.label}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>
								<div>
									<Board />
								</div>
							</Tab.Panel>
							<Tab.Panel>Tasks content</Tab.Panel>
							<Tab.Panel>Settings content</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		</div>
	);
}
