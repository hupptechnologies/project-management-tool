export default function ProfilePage() {
	return (
		<div className="max-w-2xl mx-auto bg-[#fff] p-8 rounded-x border border-[#2a2a2b] shadow space-y-6">
			{/* Avatar + Basic Info */}
			<div className="flex items-center gap-4">
				<div className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center text-xl font-bold">
					JD
				</div>
				<div>
					<p className="text-lg font-medium">John Doe</p>
					<p className="text-sm text-[#888]">john@example.com</p>
				</div>
			</div>

			{/* Editable Fields */}
			<form className="space-y-5">
				<div>
					<label className="block text-sm text-[#aaa] mb-1">Full Name</label>
					<input
						type="text"
						defaultValue="John Doe"
						className="w-full bg-[#fff] text-black p-3 border border-[#333] rounded-md"
					/>
				</div>
				<div>
					<label className="block text-sm text-[#aaa] mb-1">Role</label>
					<input
						type="text"
						defaultValue="Frontend Developer"
						className="w-full bg-[#fff] text-black p-3 border border-[#333] rounded-md"
					/>
				</div>
				<div>
					<label className="block text-sm text-[#aaa] mb-1">Bio</label>
					<textarea
						defaultValue="Passionate about building great UI and fixing bugs."
						className="w-full bg-[#fff] text-black p-3 border border-[#333] rounded-md"
					/>
				</div>

				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-500 transition text-white px-4 py-2 rounded-md text-sm"
				>
					Save Changes
				</button>
			</form>
		</div>
	);
}
