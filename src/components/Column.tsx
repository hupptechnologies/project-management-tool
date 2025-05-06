import { Column as ColumnType } from '@/lib/types';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';

type Props = {
	column: ColumnType;
};

export default function Column({ column }: Props) {
	const { setNodeRef } = useDroppable({ id: column.id });

	return (
		<div
			ref={setNodeRef}
			className="bg-gray-100 rounded-xl p-4 shadow-sm min-h-[200px]"
		>
			<h2 className="font-semibold text-lg mb-4">{column.title}</h2>
			<div className="space-y-2">
				{column.tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
}
