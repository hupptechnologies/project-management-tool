export default function NewBugPage() {
	return (
		<div className="max-w-2xl mx-auto bg-[#FFF] p-8 rounded-x border border-[#2a2a2b] shadow">
			<h2 className="text-xl font-bold mb-6">🐞 Report a New Bug</h2>
			<form className="space-y-5">
				<input
					type="text"
					placeholder="Bug Title"
					className="w-full bg-[#fff] p-3 text-black border border-[#333] rounded-md"
				/>
				<textarea
					placeholder="Steps to reproduce"
					className="w-full h-32 bg-[#fff] text-black p-3 border border-[#333] rounded-md"
				/>
				<select className="w-full bg-[#fff] text-black p-3 border border-[#333] rounded-md">
					<option>Severity</option>
					<option>Low</option>
					<option>Medium</option>
					<option>High</option>
				</select>
				<input type="file" className="text-sm text-[#999]" />
				<button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
					Submit Bug
				</button>
			</form>
		</div>
	);
}
