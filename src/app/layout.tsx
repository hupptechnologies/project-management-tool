'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const navItems = [
		{ icon: '📋', label: 'Tools', href: '/dashboard/kanban' },
		{ icon: '➕', label: 'Report Bug', href: '/dashboard/bugs/new' },
		{ icon: '👤', label: 'Profile', href: '/dashboard/profile' },
	];

	return (
		<html lang="en">
			<body className={`${inter.className} bg-white text-gray-900`}>
				<div className="flex h-screen overflow-hidden">
					{/* Sidebar */}
					<aside
						className={`bg-white border-r border-gray-200 p-4 hidden md:flex flex-col   transition-all duration-300 ${
							isCollapsed ? 'w-16' : 'w-48'
						}`}
					>
						{/* Header */}
						<div className="flex items-center justify-between mb-8">
							<div
								className={`overflow-hidden transition-all duration-300 ${
									isCollapsed ? 'w-0 opacity-0' : 'w-full opacity-100'
								}`}
							>
								<h1 className="text-xl font-bold tracking-tight text-black whitespace-nowrap">
									🐞 BugHunt
								</h1>
							</div>

							<button
								onClick={() => setIsCollapsed(!isCollapsed)}
								className="text-gray-600 hover:text-red-400 transition"
							>
								{isCollapsed ? (
									<ChevronsRight size={20} />
								) : (
									<ChevronsLeft size={20} />
								)}
							</button>
						</div>

						{/* Navigation */}
						<nav className="space-y-4 text-sm text-gray-700">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="flex items-center gap-2 hover:text-red-400 transition"
								>
									<span>{item.icon}</span>
									<span
										className={`transition-all duration-300 overflow-hidden ${
											isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
										}`}
									>
										{item.label}
									</span>
								</a>
							))}
						</nav>

						{/* Footer */}
						<div
							className={`transition-all duration-300 text-xs text-gray-400 mt-10 overflow-hidden ${
								isCollapsed ? 'opacity-0 h-0' : 'opacity-100 h-auto'
							}`}
						>
							© {new Date().getFullYear()} BugHunt Inc.
						</div>
					</aside>

					{/* Main Content */}
					<div className="flex-1 flex flex-col overflow-y-auto">
						<main className="p-6 bg-white flex-1 overflow-y-auto">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
