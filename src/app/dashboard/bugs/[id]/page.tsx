export default function BugDetailPage() {
	return (
		<div className="max-w-2xl mx-auto space-y-4">
			<h2 className="text-2xl font-bold">Bug Title</h2>
			<p>
				<strong>Status:</strong> In Progress
			</p>
			<p>
				<strong>Severity:</strong> High
			</p>
			<p>
				<strong>Assigned To:</strong> Alice
			</p>
			<div>
				<h3 className="text-lg font-semibold">Steps to Reproduce</h3>
				<p>
					1. Click the login button
					<br />
					2. Observe crash
				</p>
			</div>
		</div>
	);
}
