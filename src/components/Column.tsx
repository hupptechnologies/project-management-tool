'use client';

import { useDroppable } from '@dnd-kit/core';
import { Column as ColumnType } from '@/lib/types';
import TaskCard from './TaskCard';

export default function Column({ column }: { column: ColumnType }) {
	const { setNodeRef } = useDroppable({ id: column.id });

	return (
		<div
			ref={setNodeRef}
			className="border w-[200px] border-[#d0d0d3] rounded-[2px] p-2 flex flex-col gap-0.5 shadow-md"
		>
			{/* Column Header */}
			<div className="flex justify-between items-center mb-1">
				<h3 className="text-[10px] text-[#000]">
					{column.title.toUpperCase()}
				</h3>
				<span className="text-[8px] text-[#000]">[{column.tasks.length}]</span>
			</div>

			{/* Tasks */}
			<div className="flex flex-col gap-2 w-[180px] ">
				{column.tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
}
