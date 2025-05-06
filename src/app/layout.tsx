export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-gray-50 text-gray-900">
				<header className="bg-white shadow p-4 flex justify-between">
					<h1 className="text-xl font-bold">🐞 BugHunt</h1>
					<nav className="space-x-4">
						<a href="/dashboard/kanban">Dashboard</a>
						<a href="/dashboard/bugs/new">Report Bug</a>
						<a href="/dashboard/profile">Profile</a>
					</nav>
				</header>
				<main className="p-6">{children}</main>
			</body>
		</html>
	);
}
