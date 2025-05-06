import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#F9FAFB] text-white`}>
				<div className="flex h-screen overflow-hidden">
					{/* Sidebar */}
					<aside className="w-64 bg-[#111112]/80 backdrop-blur-md border-r border-[#1e1e1f] p-6 hidden md:flex flex-col justify-between">
						<div>
							<h1 className="text-2xl font-bold mb-8 tracking-tight">
								🐞 BugHunt
							</h1>
							<nav className="space-y-4 text-sm">
								<a
									href="/dashboard/kanban"
									className="flex items-center gap-2 text-[#bbb] hover:text-white transition"
								>
									📋 Kanban
								</a>
								<a
									href="/dashboard/bugs/new"
									className="flex items-center gap-2 text-[#bbb] hover:text-white transition"
								>
									➕ Report Bug
								</a>
								<a
									href="/dashboard/profile"
									className="flex items-center gap-2 text-[#bbb] hover:text-white transition"
								>
									👤 Profile
								</a>
							</nav>
						</div>

						<footer className="text-xs text-[#666] mt-10">
							© {new Date().getFullYear()} BugHunt Inc.
						</footer>
					</aside>

					{/* Main Content */}
					<div className="flex-1 flex flex-col overflow-y-auto">
						{/* Top Header */}
						<header className="h-16 px-6 flex items-center justify-between border-b border-[#1e1e1f] bg-[#111112]/70 backdrop-blur-sm">
							<div className="text-sm text-[#888]">Bug Tracker UI</div>
							<div className="flex items-center gap-4">
								{/* Placeholder user profile avatar */}
								<div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-sm font-bold">
									JD
								</div>
							</div>
						</header>

						{/* Page Content */}
						<main className="p-6 bg-[#10B981] flex-1 overflow-y-auto">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
