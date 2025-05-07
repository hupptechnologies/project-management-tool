import Board from '@/components/Board';
import { KANBAN_COLUMNS } from '@/constants';
import { Tab } from '@headlessui/react';
import React from 'react';
import BugTimelinePage from './timeLine';

export default function TabView() {
	return (
		<div>
			<Tab.Group>
				<Tab.List className="flex gap-3 border-b border-gray-200 mb-4">
					{KANBAN_COLUMNS.map((tab) => (
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
					<Tab.Panel>-</Tab.Panel>

					<Tab.Panel>Tasks content</Tab.Panel>
					<Tab.Panel>
						<BugTimelinePage />
					</Tab.Panel>
					<Tab.Panel>Files content</Tab.Panel>
					<Tab.Panel>Overview content</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
