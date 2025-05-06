export default function ProfilePage() {
	return (
		<div className="max-w-xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
			<p>
				<strong>Name:</strong> John Doe
			</p>
			<p>
				<strong>Email:</strong> john@example.com
			</p>
			<div className="mt-6">
				<h3 className="font-semibold">Assigned Bugs</h3>
				<ul className="list-disc list-inside">
					<li>Fix dark mode rendering issue</li>
					<li>Review pull request #42</li>
				</ul>
			</div>
		</div>
	);
}
