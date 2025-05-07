'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PROJECT_LIST } from '@/constants';
import EmptyView from './emptyView';
import ProjectFilter from './projectFilter';
import SelectedProject from './selectedProject';
import ProjectList from './projectList';

export default function KanbanPage() {
	const [selectedProject, setSelectedProject] = useState<
		null | (typeof PROJECT_LIST)[0]
	>(null);

	return (
		<div className="flex flex-row">
			{!selectedProject && (
				<div className="w-48">
					<p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide mb-2">
						All Projects
					</p>

					<div className="flex items-center gap-2 relative">
						<Search className="absolute left-3 text-gray-500" size={8} />
						<input
							type="text"
							placeholder="Search for projects..."
							className="pl-8 pr-8 py-1 text-black text-[8px] rounded-[2px] border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
						/>
						<SlidersHorizontal
							className="absolute right-3 text-gray-500 cursor-pointer"
							size={8}
						/>
					</div>

					<ProjectFilter />
					<ProjectList onSelect={setSelectedProject} />
				</div>
			)}

			{/* Main Content */}
			<div className="w-full h-50 px-0">
				{selectedProject ? (
					<>
						<SelectedProject
							project={selectedProject}
							onBack={() => setSelectedProject(null)}
						/>
					</>
				) : (
					<EmptyView />
				)}
			</div>
		</div>
	);
}
