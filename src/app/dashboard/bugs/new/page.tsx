export default function NewBugPage() {
	return (
		<div className="max-w-xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Report a New Bug</h2>
			<form className="space-y-4">
				<input
					type="text"
					placeholder="Title"
					className="w-full border p-2 rounded"
				/>
				<textarea
					placeholder="Steps to reproduce"
					className="w-full border p-2 rounded h-32"
				/>
				<select className="w-full border p-2 rounded">
					<option>Severity</option>
					<option>Low</option>
					<option>Medium</option>
					<option>High</option>
				</select>
				<input type="file" />
				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
