import { COLUMN, Project, ProjectFilter } from '@/lib/types';

export const PROJECT_LIST: Project[] = [
	{
		id: 'mobile-app',
		name: 'Mobile App',
		description: 'iOS and Android development',
		color: 'bg-blue-500',
	},
	{
		id: 'website-redesign',
		name: 'Website Redesign',
		description: 'Revamp landing and about pages',
		color: 'bg-green-500',
	},
	{
		id: 'marketing-campaign',
		name: 'Marketing Campaign',
		description: 'Q2 product launch ads',
		color: 'bg-yellow-500',
	},
	{
		id: 'api-integration',
		name: 'API Integration',
		description: 'Third-party auth + payments',
		color: 'bg-purple-500',
	},
	{
		id: 'analytics-dashboard',
		name: 'Analytics Dashboard',
		description: 'Internal reporting tool',
		color: 'bg-red-500',
	},
	{
		id: 'bug-fix-sprint',
		name: 'Bug Fix Sprint',
		description: 'Resolve critical issues',
		color: 'bg-pink-500',
	},
	{
		id: 'customer-portal',
		name: 'Customer Portal',
		description: 'B2B access to orders & support',
		color: 'bg-orange-500',
	},
	{
		id: 'seo-optimization',
		name: 'SEO Optimization',
		description: 'Improve Google rankings',
		color: 'bg-indigo-500',
	},
	{
		id: 'documentation',
		name: 'Documentation',
		description: 'Update API and user docs',
		color: 'bg-teal-500',
	},
	{
		id: 'onboarding-flow',
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
