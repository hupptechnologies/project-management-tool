export default function LoginPage() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="bg-white p-6 rounded shadow w-full max-w-sm">
				<h2 className="text-xl font-bold mb-4 text-center">Login to BugHunt</h2>
				<button className="bg-black text-white w-full py-2 rounded mb-2">
					Login with GitHub
				</button>
				<button className="border w-full py-2 rounded">Login with Email</button>
			</div>
		</div>
	);
}
