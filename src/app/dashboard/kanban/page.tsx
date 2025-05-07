import Board from '@/components/Board';
import {
	ArrowRight,
	FolderKanban,
	Search,
	SlidersHorizontal,
} from 'lucide-react';

export default function KanbanPage() {
	const projectList = [
		{
			name: 'Mobile App',
			description: 'iOS and Android development',
			color: 'bg-blue-500',
		},
		{
			name: 'Website Redesign',
			description: 'Revamp landing and about pages',
			color: 'bg-green-500',
		},
		{
			name: 'Marketing Campaign',
			description: 'Q2 product launch ads',
			color: 'bg-yellow-500',
		},
		{
			name: 'API Integration',
			description: 'Third-party auth + payments',
			color: 'bg-purple-500',
		},
		{
			name: 'Analytics Dashboard',
			description: 'Internal reporting tool',
			color: 'bg-red-500',
		},
		{
			name: 'Bug Fix Sprint',
			description: 'Resolve critical issues',
			color: 'bg-pink-500',
		},
		{
			name: 'Customer Portal',
			description: 'B2B access to orders & support',
			color: 'bg-orange-500',
		},
		{
			name: 'SEO Optimization',
			description: 'Improve Google rankings',
			color: 'bg-indigo-500',
		},
		{
			name: 'Documentation',
			description: 'Update API and user docs',
			color: 'bg-teal-500',
		},
		{
			name: 'Onboarding Flow',
			description: 'Simplify signup experience',
			color: 'bg-cyan-500',
		},
	];

	return (
		<div className="flex flex-row">
			<div className="w-48">
				<div className="flex items-center gap-2 relative">
					{/* Search Icon */}
					<Search className="absolute left-3 text-gray-500" size={8} />

					{/* Input */}
					<input
						type="text"
						placeholder="Search for projects..."
						className="pl-8 pr-8 py-1 text-black text-[8px] rounded-[2px] border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
					/>

					{/* Filter Icon */}
					<SlidersHorizontal
						className="absolute right-3 text-gray-500 cursor-pointer"
						size={8}
					/>
				</div>
				<div className="h-[410px] overflow-y-auto pr-1">
					{projectList.map((project, index) => (
						<div
							key={index}
							className={
								'my-2 rounded-[4px] border border-gray-200 shadow-sm p-1.5 hover:shadow-md transition flex items-center justify-between'
							}
						>
							{/* Left Section */}
							<div className="flex items-center gap-3 w-full overflow-hidden">
								<div className="p-2 bg-gray-100 rounded-full shrink-0">
									<FolderKanban size={10} className="text-gray-600" />
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-1">
										<h6 className=" text-black text-[10px] truncate">
											{project.name}
										</h6>
									</div>
									<p className="text-[8px] text-black truncate">
										{project.description}
									</p>
								</div>
							</div>

							{/* Right Icon */}
							<ArrowRight size={10} className="text-black shrink-0 ml-2" />
						</div>
					))}
				</div>
			</div>
			<div className="w-full h-50">
				{/* <h1 className="text-2xl font-bold mb-1">Kanban Board</h1> */}
				<Board />
			</div>
		</div>
	);
}
