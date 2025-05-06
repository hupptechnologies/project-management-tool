'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import {
	CheckSquare,
	ChevronsLeft,
	ChevronsRight,
	LayoutDashboard,
	MessageSquare,
	Settings,
	Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/lib/types';
import Header from '@/components/Header';
import ProjectMenu from '@/components/ProjectMenu';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname(); // Get current route

	const [isCollapsed, setIsCollapsed] = useState(false);

	const navItems: NavItem[] = [
		{
			icon: <LayoutDashboard size={16} />,
			label: 'Home',
			href: '/dashboard/kanban',
		},
		{
			icon: <MessageSquare size={16} />,
			label: 'Messages',
			href: '/dashboard/message',
		},
		{
			icon: <CheckSquare size={16} />,
			label: 'Tasks',
			href: '/dashboard/bugs/new',
		},
		{ icon: <Users size={16} />, label: 'Members', href: '/dashboard/member' },
		{
			icon: <Settings size={16} />,
			label: 'Settings',
			href: '/dashboard/setting',
		},
	];

	return (
		<html lang="en">
			<body className={`${inter.className} bg-white text-gray-900`}>
				<div className="flex h-screen overflow-hidden">
					{/* Sidebar */}
					<aside
						className={`bg-white border-r border-gray-200 p-4 hidden md:flex flex-col   transition-all duration-300 ${
							isCollapsed ? 'w-16' : 'w-40'
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
						<nav className="space-y-2 text-sm text-gray-700">
							{navItems.map((item) => {
								const isActive = pathname === item.href;

								return (
									<Link
										key={item.href}
										href={item.href}
										className={`group flex items-center gap-2 px-2 py-0.5 rounded transition-all duration-300 relative 
					hover:bg-gray-100 
					${isActive ? 'bg-gray-100 font-medium text-red-500' : ''}
				`}
									>
										{/* Icon */}
										<span>{item.icon}</span>

										{/* Label */}
										<span
											className={`transition-all text-[12px] duration-300 overflow-hidden whitespace-nowrap
						${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
					`}
										>
											{item.label}
										</span>

										{/* Tooltip for collapsed view */}
										{isCollapsed && (
											<span
												className="absolute left-full ml-2 top-1/2 -translate-y-1/2 
							bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 
							transition whitespace-nowrap z-10 text-xs"
											>
												{item.label}
											</span>
										)}
									</Link>
								);
							})}
						</nav>

						{!isCollapsed && <ProjectMenu />}
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
						<Header />
						<main className="p-6 bg-white flex-1 overflow-y-auto">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
