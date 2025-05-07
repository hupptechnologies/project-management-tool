'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PROJECT_LIST } from '@/constants';
import EmptyView from './emptyView';
import ProjectList from './projectList';
import SelectedProject from './selectedProject';
import ProjectFilter from './projectFilter';

export default function KanbanPage() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const projectIdFromURL = searchParams.get('projectId');
	const [selectedProject, setSelectedProject] = useState(
		projectIdFromURL
			? PROJECT_LIST.find((p) => p.id === projectIdFromURL)
			: null
	);

	useEffect(() => {
		if (selectedProject) {
			const params = new URLSearchParams(searchParams.toString());
			params.set('projectId', selectedProject.id);
			router.replace(`?${params.toString()}`);
		}
	}, [selectedProject]);

	const handleBack = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete('projectId');
		router.replace(`?${params.toString()}`);
		setSelectedProject(null);
	};

	return (
		<div className="flex flex-row">
			{!selectedProject && (
				<div className="w-48">
					<p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide mb-2">
						All Projects
					</p>
					<ProjectFilter />
					<ProjectList onSelect={setSelectedProject} />
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
