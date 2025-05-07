'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import TabView from '../../kanban/tab';

// Mock media array (replace with real data or fetch from backend)
const media = [
	{
		type: 'image',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk3OPGuPxoO8iHaIkCiWpq1ECy115Xq0ODA&s',
	},
	{
		type: 'image',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk3OPGuPxoO8iHaIkCiWpq1ECy115Xq0ODA&s',
	},
	{ type: 'video', src: '/crash-demo.mp4' },
];

export default function BugDetailPage({ params }: { params: { id: string } }) {
	const router = useRouter();

	return (
		<div className="mx-auto p-2 bg-white space-y-4 mt-1 rounded shadow">
			{/* Back Button */}
			<button
				onClick={() => router.back()}
				className="flex items-center text-sm text-gray-600 hover:text-black transition"
			>
				<ArrowLeft size={16} className="mr-1" />
				Back to Board
			</button>

			{/* Header */}
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold text-gray-900">
					🐞 Bug Report #{params.id}
				</h2>
				<span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
					In Progress
				</span>
			</div>

			{/* Meta Info */}
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
				<div>
					<p className="text-gray-500">Status</p>
					<p className="font-medium text-yellow-600">In Progress</p>
				</div>
				<div>
					<p className="text-gray-500">Severity</p>
					<p className="font-medium text-red-600">High</p>
				</div>
				<div>
					<p className="text-gray-500">Assigned To</p>
					<p className="font-medium text-gray-800">Alice</p>
				</div>
			</div>

			<hr className="border-gray-200" />

			{/* Steps to Reproduce */}
			<section>
				<h3 className="text-lg font-semibold text-gray-900 mb-2">
					🧪 Steps to Reproduce
				</h3>
				<ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 pl-4">
					<li>Click the login button</li>
					<li>Observe crash on redirect</li>
				</ol>
			</section>

			{/* Description */}
			<section>
				<h3 className="text-lg font-semibold text-gray-900 mb-2">
					📝 Description
				</h3>
				<p className="text-sm text-gray-700 leading-relaxed">
					This bug causes the app to crash upon attempting to log in due to a
					missing <code className="bg-gray-100 px-1 rounded">authToken</code>.
					It appears to be related to recent middleware changes.
				</p>
			</section>

			{/* Media Section */}
			{media.length > 0 && (
				<section>
					<h3 className="text-lg font-semibold text-gray-900 mb-2">
						📎 Attachments
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{media.map((item, index) =>
							item.type === 'image' ? (
								<img
									key={index}
									src={item.src}
									alt={`attachment-${index}`}
									className="rounded border border-gray-200 h-34 w-80"
								/>
							) : (
								<video
									key={index}
									controls
									src={item.src}
									className="rounded border border-gray-200 h-34 w-80"
								/>
							)
						)}
					</div>
				</section>
			)}

			<TabView />
		</div>
	);
}
