'use client';

import { useDroppable } from '@dnd-kit/core';
import { Column as ColumnType } from '@/lib/types';
import TaskCard from './TaskCard';

export default function Column({ column }: { column: ColumnType }) {
	const { setNodeRef } = useDroppable({ id: column.id });

	return (
		<div
			ref={setNodeRef}
			className="border border-[#2a2a2b] rounded-x p-4 flex flex-col gap-4 shadow-md"
		>
			{/* Column Header */}
			<div className="flex justify-between items-center mb-2">
				<h3 className="text-x text-[#000] font-semibold">{column.title}</h3>
				<span className="text-xs text-[#000]">{column.tasks.length}</span>
			</div>

			{/* Tasks */}
			<div className="flex flex-col gap-3">
				{column.tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
}
