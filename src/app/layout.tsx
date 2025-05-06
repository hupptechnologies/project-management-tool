'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import {
	Bell,
	Calendar,
	CheckSquare,
	ChevronsLeft,
	ChevronsRight,
	LayoutDashboard,
	MessageCircle,
	MessageSquare,
	Search,
	Settings,
	Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem, ProjectItem } from '@/lib/types';

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

	const projectList: ProjectItem[] = [
		{ label: 'Mobile App', href: '#1', color: 'bg-blue-500' },
		{
			label: 'Website Redesign',
			href: '#2',
			color: 'bg-green-500',
		},
		{ label: 'Design System', href: '#3', color: 'bg-red-500' },
		{ label: 'Wireframes', href: '#4', color: 'bg-yellow-500' },
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

						{!isCollapsed && (
							<>
								<div className="my-2 h-0.5 bg-gray-200" />
								<h6 className="text-[10px] tracking-tight text-black whitespace-nowrap">
									My projects
								</h6>
								<div className="my-2 h-0.5 bg-gray-200" />
								<nav className="space-y-2 text-sm text-gray-700">
									{!isCollapsed &&
										projectList.map((item) => {
											const isActive = pathname === item.href;

											return (
												<Link
													key={item.href}
													href={item.href}
													className={`group flex items-center gap-2 px-2 py-0.5 rounded-x transition-all duration-300 relative 
					hover:bg-gray-100 
					${isActive ? 'bg-gray-100 font-medium text-red-500' : ''}
				`}
												>
													<div
														className={`h-2 w-2 ${item.color} rounded-full`}
													/>
													{/* Label */}
													<span
														className={`transition-all 
												text-[10px]
												duration-300 overflow-hidden whitespace-nowrap
						${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
					`}
													>
														{item.label}
													</span>
												</Link>
											);
										})}
								</nav>
							</>
						)}
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
						<div className="h-12 bg-white px-4 flex items-center justify-between shadow-sm border-b border-gray-200">
							{/* Search Input */}
							<div className="flex items-center gap-2 w-1/3 relative">
								<Search className="absolute left-3 text-gray-500" size={16} />
								<input
									type="text"
									placeholder="Search for anything..."
									className="pl-8 pr-3 py-1 text-black text-[10px] rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
								/>
							</div>

							{/* Icons */}
							<div className="flex items-center gap-4 text-gray-600">
								<Bell size={16} className="cursor-pointer hover:text-red-400" />
								<MessageCircle
									size={16}
									className="cursor-pointer hover:text-red-400"
								/>
								<Calendar
									size={16}
									className="cursor-pointer hover:text-red-400"
								/>
								<Link href={'/dashboard/profile'}>
									<div className="flex items-center gap-2">
										<img
											src="/avatar.png"
											alt="User"
											className="w-8 h-8 rounded-full border border-gray-300"
										/>
									</div>
								</Link>
							</div>

							{/* User Avatar */}
						</div>

						<main className="p-6 bg-white flex-1 overflow-y-auto">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
