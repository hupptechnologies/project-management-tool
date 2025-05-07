'use client';

import { ArrowRight, FolderKanban } from 'lucide-react';
import { PROJECT_LIST } from '@/constants';

type Props = {
	onSelect: (project: (typeof PROJECT_LIST)[0]) => void;
};

export default function ProjectList({ onSelect }: Props) {
	return (
		<div className="h-[410px] overflow-y-auto pr-1">
			{PROJECT_LIST.map((project, index) => (
				<div
					key={index}
					onClick={() => onSelect(project)}
					className="my-2 rounded-[4px] border border-gray-200 shadow-sm p-1.5 
							flex items-center justify-between transition-all duration-200 
							hover:shadow-md hover:bg-gray-50 hover:scale-[1.01] cursor-pointer"
				>
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
					<ArrowRight size={10} className="text-black shrink-0 ml-2" />
				</div>
			))}
		</div>
	);
}
