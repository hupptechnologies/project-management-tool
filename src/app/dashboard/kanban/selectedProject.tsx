'use client';

import { ArrowLeft, FolderKanban, MoreVertical, Star } from 'lucide-react';
import { PROJECT_LIST } from '@/constants';
import TabView from './tab';

type Props = {
	project: (typeof PROJECT_LIST)[0];
	onBack: () => void;
};

export default function SelectedProject({ project, onBack }: Props) {
	return (
		<>
			{/* Header with back button and project info */}
			<div className="rounded-[4px] border border-gray-200 p-1.5 flex items-center justify-between mb-2">
				<div className="flex items-center gap-3 w-full overflow-hidden">
					<ArrowLeft
						onClick={onBack}
						className="text-black cursor-pointer hover:text-yellow-500 transition"
						size={10}
					/>
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
				<div className="flex items-center gap-2 ml-2">
					<Star size={10} className="text-black" />
					<MoreVertical size={10} className="text-black" />
				</div>
			</div>

			{/* Tabs */}
			<TabView />
		</>
	);
}
