'use client';

import { useDraggable } from '@dnd-kit/core';
import { Task } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function TaskCard({ task }: { task: Task }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const router = useRouter();
	const style = {
		transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
	};

	const handleClick = () => {
		router.push(`/dashboard/bugs/${task.id}`);
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			onClick={handleClick}
			className="bg-[#1a1a1d] p-3 rounded-md border border-[#333] hover:border-[#555] hover:bg-[#2c2c2d] transition shadow-sm cursor-pointer active:scale-[0.98]"
		>
			<p className="text-sm">{task.title}</p>
		</div>
	);
}
