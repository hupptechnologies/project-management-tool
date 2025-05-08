'use client';

import { Paperclip, User, CheckCircle } from 'lucide-react';
import clsx from 'clsx';
import { BUG_TIMELINE } from '@/constants';

export default function BugTimelinePage() {
	const iconMap = {
		created: <User size={10} className="text-gray-500" />,
		assigned: <User size={10} className="text-gray-500" />,
		attachment: <Paperclip size={10} className="text-indigo-500" />,
		status: <CheckCircle size={10} className="text-green-500" />,
	};

	return (
		<div className=" mx-auto p-1">
			<h2 className="text-[14px] font-bold text-gray-900 mb-6">
				🐞 Bug Timeline
			</h2>

			<div className="relative">
				{/* Vertical Line */}
				<div className="absolute left-2.5 top-0 bottom-0 w-px bg-gray-300" />

				<ul className="space-y-4">
					{BUG_TIMELINE.map((entry) => (
						<li key={entry.id} className="relative flex items-start gap-2">
							{/* Icon */}
							<div className="z-10 bg-white rounded-full p-1 border border-gray-300">
								{iconMap[entry.type]}
							</div>

							{/* Content Box */}
							<div className="bg-white border border-gray-200 rounded-[1px] shadow-sm p-2 w-full">
								<div className="flex justify-between items-center mb-1">
									<p className="text-[10px] font-medium text-gray-800">
										{entry.message}
									</p>
									<span className="text-[8px] text-gray-400">{entry.time}</span>
								</div>

								{entry.status && (
									<p
										className={clsx(
											'text-[8px] font-semibold mt-1 inline-block px-2 py-1 rounded',
											{
												'bg-yellow-100 text-yellow-800':
													entry.status === 'In Progress',
												'bg-green-100 text-green-800': entry.status === 'Fixed',
												'bg-blue-100 text-blue-800': ![
													'In Progress',
													'Fixed',
												].includes(entry.status),
											}
										)}
									>
										Status: {entry.status}
									</p>
								)}

								{entry.file && (
									<a
										href={entry.file}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[8px] mt-2 text-indigo-600 underline block hover:text-indigo-800"
									>
										View Attachment
									</a>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
