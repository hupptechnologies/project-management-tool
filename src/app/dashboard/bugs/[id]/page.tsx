'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import TabView from '../../kanban/tab';
import { TIMELINE_ATTACHMENT } from '@/constants';

// Mock media array (replace with real data or fetch from backend)

export default function BugDetailPage({ params }: { params: { id: string } }) {
	const router = useRouter();

	return (
		<div className="mx-auto p-2 bg-white space-y-4 mt-1 ">
			{/* Header */}
			<div className="flex items-center justify-between">
				<button
					onClick={() => router.back()}
					className="flex items-center text-[10px] text-gray-600 hover:text-black transition"
				>
					<ArrowLeft size={12} className="mr-1" />
					<h6 className="text-[14px] font-bold text-gray-900">
						🐞 Bug Report #{params.id}
					</h6>
					<span className="text-[10px] mx-2 px-2 py-1 bg-gray-100 text-yellow-800 rounded">
						Mobile App
					</span>
				</button>

				<div>
					<span className="text-[8px] mx-1 px-4 py-1 text-gray-800 rounded">
						2025-05-06 10:31
					</span>
					<span className="text-[8px] px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
						In Progress
					</span>
				</div>
			</div>

			{/* Meta Info */}
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
				<div>
					<p className="text-gray-500 text-[10px]">Reporter</p>
					<p className="font-medium text-gray-800 text-[8px]">Alice</p>
				</div>
				<div>
					<p className="text-gray-500 text-[10px]">Assigned To</p>
					<p className="font-medium text-gray-800 text-[8px]">Jack</p>
				</div>
				<div>
					<p className="text-gray-500 text-[10px]">Priority</p>
					<p className="font-medium text-yellow-600 text-[8px]">High</p>
				</div>
				<div>
					<p className="text-gray-500 text-[10px]">Severity</p>
					<p className="font-medium text-red-600 text-[8px]">major</p>
				</div>
				<div>
					<p className="text-gray-500 text-[10px]">Reproducibility</p>
					<p className="font-medium text-gray-800 text-[8px]">always</p>
				</div>
				<div>
					<p className="text-gray-500 text-[10px]">Resolution</p>
					<p className="font-medium text-gray-800 text-[8px]">reopened</p>
				</div>
			</div>

			<hr className="border-gray-200" />

			{/* Steps to Reproduce */}
			<section>
				<h3 className="text-[14px]  font-semibold text-gray-900 mb-2">
					🧪 Steps to Reproduce
				</h3>
				<ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 pl-4">
					<li className="text-[8px]  font-semibold text-gray-900 mb-2">
						Click the login button
					</li>
					<li className="text-[8px]  font-semibold text-gray-900 mb-2">
						Observe crash on redirect
					</li>
				</ol>
			</section>
			<hr className="border-gray-200" />

			{/* Description */}
			<section>
				<h3 className="text-[14px] font-semibold text-gray-900 mb-2">
					📝 Description
				</h3>
				<p className="text-[8px] text-gray-700 leading-relaxed">
					This bug causes the app to crash upon attempting to log in due to a
					missing <code className="bg-gray-100 px-1 rounded">authToken</code>.
					It appears to be related to recent middleware changes.
				</p>
			</section>
			<hr className="border-gray-200" />

			{/* Media Section */}
			{TIMELINE_ATTACHMENT.length > 0 && (
				<section>
					<h3 className="text-[14px] font-semibold text-gray-900 mb-2">
						📎 Attachments
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{TIMELINE_ATTACHMENT.map((item, index) =>
							item.type === 'image' ? (
								<div>
									<img
										key={index}
										src={item.src}
										alt={`attachment-${index}`}
										className="rounded border border-gray-200 h-34 w-80"
									/>
									<p className="text-[8px] text-gray-700 my-1 leading-relaxed">
										{item.name} - {item.size} mb
									</p>
								</div>
							) : (
								<div>
									<video
										key={index}
										controls
										src={item.src}
										className="rounded border border-gray-200 h-34 w-80"
									/>
									<p className="text-[8px] text-gray-700 my-1 leading-relaxed">
										{item.name} - {item.size} mb
									</p>
								</div>
							)
						)}
					</div>
				</section>
			)}
			<TabView />
		</div>
	);
}
