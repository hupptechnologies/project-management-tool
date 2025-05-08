'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { useUIStore } from '@/lib/store';
import EmptyView from './emptyView';
import ProjectList from './projectList';
import SelectedProject from './selectedProject';
import ProjectFilter from './projectFilter';

export default function KanbanPage() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const showProjectPanel = useUIStore((state) => state.showProjectPanel);
	const setShowProjectPanel = useUIStore((state) => state.setShowProjectPanel);
	const toggleProjectPanel = useUIStore((state) => state.toggleProjectPanel);

	// in KanbanPage.tsx
	const selectedProject = useUIStore((state) => state.selectedProject);
	const setSelectedProject = useUIStore((state) => state.setSelectedProject);

	useEffect(() => {
		if (selectedProject) {
			const params = new URLSearchParams(searchParams.toString());
			params.set('projectId', selectedProject.id);
			router.replace(`?${params.toString()}`);
			setShowProjectPanel(false); // hide panel when project selected
		}
	}, [selectedProject]);

	const handleBack = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete('projectId');
		router.replace(`?${params.toString()}`);
		setSelectedProject(null);
		setShowProjectPanel(false); // reopen panel on back
	};

	return (
		<div className="flex flex-row">
			{showProjectPanel && (
				<div className="absolute top-8 right-4 z-50 bg-white border border-gray-200 rounded shadow-md w-56 max-h-[calc(100vh-64px)] flex flex-col p-2">
					{/* Header */}
					<div className="flex justify-between items-center mb-1">
						<p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide">
							All Projects
						</p>
						<button
							onClick={() => {
								toggleProjectPanel();
								setShowProjectPanel(false);
							}}
							className="text-gray-400 hover:text-red-500 p-1"
							aria-label="Close"
						>
							<X size={12} />
						</button>
					</div>

					{/* Filter (non-scrollable) */}
					<div className="shrink-0">
						<ProjectFilter />
					</div>

					{/* Scrollable List */}
					<div className="overflow-y-auto mt-2 flex-1">
						<ProjectList
							selected={selectedProject}
							onSelect={(project) => {
								toggleProjectPanel();
								setSelectedProject(project);
								setShowProjectPanel(false);
							}}
						/>
					</div>
				</div>
			)}

			<div className="w-full h-50 px-0">
				{selectedProject ? (
					<SelectedProject project={selectedProject} onBack={handleBack} />
				) : (
					<EmptyView />
				)}
			</div>
		</div>
	);
}
