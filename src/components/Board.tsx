'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { useState } from 'react';
import { Column as ColumnType } from '@/lib/types';
import Column from './Column';

const initialData: ColumnType[] = [
	{
		id: 'todo',
		title: 'To Do',
		tasks: [{ id: '1', title: 'Set up project' }],
	},
	{
		id: 'inprogress',
		title: 'In Progress',
		tasks: [{ id: '2', title: 'Design Kanban UI' }],
	},
	{
		id: 'done',
		title: 'Done',
		tasks: [],
	},
];

export default function Board() {
	const [columns, setColumns] = useState<ColumnType[]>(initialData);

	const findColumnByTaskId = (taskId: string) => {
		return columns.find((col) => col.tasks.find((t) => t.id === taskId));
	};

	const handleDragEnd = (event: any) => {
		const { active, over } = event;
		if (!over || active.id === over.id) {
			return;
		}

		const fromCol = findColumnByTaskId(active.id);
		const toCol = columns.find((col) => col.id === over.id);
		if (!fromCol || !toCol) {
			return;
		}

		const task = fromCol.tasks.find((t) => t.id === active.id);
		if (!task) {
			return;
		}

		// Remove from old column
		const updatedFromCol = {
			...fromCol,
			tasks: fromCol.tasks.filter((t) => t.id !== active.id),
		};

		// Add to new column
		const updatedToCol = {
			...toCol,
			tasks: [...toCol.tasks, task],
		};

		const updatedCols = columns.map((col) => {
			if (col.id === fromCol.id) {
				return updatedFromCol;
			}
			if (col.id === toCol.id) {
				return updatedToCol;
			}
			return col;
		});

		setColumns(updatedCols);
	};

	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<div className="grid grid-cols-3 gap-4 p-4">
				{columns.map((column) => (
					<Column key={column.id} column={column} />
				))}
			</div>
		</DndContext>
	);
}
