import { FolderKanban } from 'lucide-react';
import React from 'react';

export default function EmptyView() {
	return (
		<div className="flex flex-col items-center justify-center h-full text-center text-gray-500 py-12">
			<FolderKanban size={32} className="mb-4 text-gray-400" />
			<h2 className="text-sm font-semibold">No project selected</h2>
			<p className="text-[10px] mt-1 text-gray-400">
				Select a project from the left panel to view its details.
			</p>
		</div>
	);
}
