export default function BugDetailPage({ params }: { params: { id: string } }) {
	return (
		<div className="max-w-3xl mx-auto p-6 bg-[#1a1a1b] border border-[#2a2a2b] rounded-xl shadow-md space-y-6">
			{/* Title */}
			<h2 className="text-2xl font-bold text-white tracking-tight">
				🐞 Bug: Login Crash #{params.id}
			</h2>

			{/* Meta Info */}
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#ccc]">
				<div>
					<span className="block text-[#888]">Status</span>
					<span className="font-medium text-yellow-400">In Progress</span>
				</div>
				<div>
					<span className="block text-[#888]">Severity</span>
					<span className="font-medium text-red-500">High</span>
				</div>
				<div>
					<span className="block text-[#888]">Assigned To</span>
					<span className="font-medium text-white">Alice</span>
				</div>
			</div>

			{/* Steps to Reproduce */}
			<div>
				<h3 className="text-lg font-semibold mb-2 text-white">
					Steps to Reproduce
				</h3>
				<ol className="list-decimal list-inside space-y-1 text-sm text-[#ccc]">
					<li>Click the login button</li>
					<li>Observe crash on redirect</li>
				</ol>
			</div>

			{/* (Optional) Description or Comments */}
			<div>
				<h3 className="text-lg font-semibold mb-2 text-white">
					📝 Description
				</h3>
				<p className="text-sm text-[#ccc]">
					This bug causes the app to crash upon attempting to log in due to a
					missing `authToken`. It seems related to recent middleware changes.
				</p>
			</div>
		</div>
	);
}
