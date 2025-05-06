import { useDraggable } from '@dnd-kit/core';
import { Task } from '@/lib/types';

type Props = {
	task: Task;
};

export default function TaskCard({ task }: Props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined,
	};

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			style={style}
			className="bg-white p-3 rounded shadow cursor-grab"
		>
			<h3 className="font-medium">{task.title}</h3>
		</div>
	);
}
