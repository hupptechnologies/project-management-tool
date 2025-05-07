'use client';

import { useDraggable } from '@dnd-kit/core';
import { Task } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { File, MessageCircle, MoreVertical, Star } from 'lucide-react';

export default function TaskCard({ task }: { task: Task }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const router = useRouter();
	const style = {
		transform: transform
			? `translate(${transform.x}px, ${transform.y}px)`
			: undefined,
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
			// onClick={handleClick}
			className="p-1 
			rounded-x
			bg-white
			border border-[#d0d0d3] hover:border-[#555] hover:bg-[#fff] transition  cursor-pointer active:scale-[0.98]"
		>
			<div className="flex items-center overflow-x-auto py-0.5 flex-row justify-between">
				<>
					<p className="text-[10px] text-black my-1">{task.title}</p>
				</>
				<div className=" flex items-center">
					<Star
						size={12}
						className="text-black cursor-pointer hover:text-yellow-500 transition"
					/>
				</div>
			</div>
			<div>
				<img
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk3OPGuPxoO8iHaIkCiWpq1ECy115Xq0ODA&s'
					}
					alt="Example"
					className="h-16 w-44 rounded-[2px] border border-[#d0d0d3]  hover:bg-[#dbdbf3] transition"
				/>
			</div>
			<div className="flex gap-2 items-center overflow-x-auto py-1 flex-row justify-between">
				<div className=" flex items-center gap-1">
					<div className="flex-row flex align-center items-center">
						<MessageCircle
							size={10}
							className="text-black cursor-pointer hover:text-yellow-500 transition"
						/>
						<p className="text-[8px] text-black mx-0.5">10</p>
					</div>
					<div className="flex-row flex align-center items-center">
						<File
							size={10}
							className="text-black cursor-pointer hover:text-yellow-500 transition"
						/>
						<p className="text-[8px] text-black mx-0.5">4</p>
					</div>
				</div>
				<div className=" flex items-center">
					<p className="text-[8px] text-black mx-3">Assigned to</p>
					<div className="flex relative">
						<img
							src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
							alt="User"
							className="w-4 h-4 rounded-full border border-gray-300 absolute top-0 left-[-10px] transform"
						/>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch6CDHA9hqbe3GbIo6O0T-EWeIL7JJ8_cpQ&s"
							alt="User"
							className="w-4 h-4 rounded-full border border-gray-300"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
