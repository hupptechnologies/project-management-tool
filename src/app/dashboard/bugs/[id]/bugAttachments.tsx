import { Attachment } from '@/lib/types';

export default function BugAttachments({
	attachments,
}: {
	attachments: Attachment[];
}) {
	if (!attachments.length) {
		return null;
	}

	return (
		<section>
			<h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
				📎 Attachments
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{attachments.map((item, index) => (
					<div
						key={index}
						className="border border-gray-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
					>
						<div className="w-full aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
							{item.type === 'image' ? (
								<img
									src={item.src}
									alt={`attachment-${index}`}
									className="object-cover w-full h-full"
								/>
							) : (
								<video
									controls
									src={item.src}
									className="object-cover w-full h-full"
								/>
							)}
						</div>
						<div className="p-2">
							<p className="text-[10px] text-gray-700 truncate">{item.name}</p>
							<p className="text-[9px] text-gray-500">{item.size} MB</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
