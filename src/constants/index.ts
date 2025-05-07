import { COLUMN, Project, ProjectFilter } from '@/lib/types';

export const PROJECT_LIST: Project[] = [
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

export const PROJECT_FILTER: ProjectFilter[] = [
	{ label: 'All', count: 20 },
	{ label: 'Discussion', count: 3 },
	{ label: 'Active', count: 7 },
	{ label: 'On Hold', count: 3 },
	{ label: 'Closed', count: 7 },
];

export const KANBAN_COLUMNS: COLUMN[] = [
	{ label: 'Discussion', value: 'Discussion' },
	{ label: 'Tasks', value: 'tasks' },
	{ label: 'Timelines', value: 'Timelines' },
	{ label: 'Files', value: 'Files' },
	{ label: 'Overview', value: 'Overview' },
];
