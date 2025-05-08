// components/Header.tsx
import { useUIStore } from '@/lib/store';
import { Folder, Bell, Calendar, MessageCircle, Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const toggleProjectPanel = useUIStore((state) => state.toggleProjectPanel);

	return (
		<div className="h-12 bg-white px-4 flex items-center justify-between shadow-sm border-b border-gray-200">
			<div className="flex items-center gap-2 w-1/3 relative">
				<Search className="absolute left-3 text-gray-500" size={10} />
				<input
					type="text"
					placeholder="Search for anything..."
					className="pl-8 pr-3 py-1 text-black text-[8px] rounded-[2px] border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
				/>
			</div>

			<div className="flex items-center gap-4 text-gray-600">
				<button
					onClick={toggleProjectPanel}
					className="hover:text-red-400 transition"
				>
					<Folder size={10} />
				</button>

				<Bell size={10} className="cursor-pointer hover:text-red-400" />
				<MessageCircle
					size={10}
					className="cursor-pointer hover:text-red-400"
				/>
				<Calendar size={10} className="cursor-pointer hover:text-red-400" />

				<Link href={'/dashboard/profile'}>
					<img
						src="https://eliteadmin.themedesigner.in/demos/bt4/university/dist/images/users/11.jpg"
						alt="User"
						className="w-6 h-6 rounded-full border border-gray-300"
					/>
				</Link>
			</div>
		</div>
	);
}
