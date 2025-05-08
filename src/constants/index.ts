import {
	ActionItem,
	Attachment,
	BugTimeline,
	COLUMN,
	MetaInfo,
	Project,
	ProjectFilter,
} from '@/lib/types';
import { UserPlus, Edit3, Eye, Copy, Pin } from 'lucide-react';

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
	{ label: 'Relationships', value: 'Relationships' },
	{
		label: 'Users monitoring this issue',
		value: 'Users monitoring this issue',
	},
	{ label: 'Issue History', value: 'Issue History' },
	{ label: 'Add Note', value: 'Add Note' },
	{ label: 'Activities', value: 'Activities' },
];

export const BUG_TIMELINE: BugTimeline[] = [
	{
		id: 1,
		type: 'created',
		user: 'Alice',
		message: 'Bug reported by Alice',
		time: '2025-05-06 10:15 AM',
	},
	{
		id: 2,
		type: 'assigned',
		user: 'Bob',
		message: 'Assigned to Bob',
		time: '2025-05-06 11:00 AM',
	},
	{
		id: 3,
		type: 'attachment',
		user: 'Alice',
		message: 'Uploaded screenshot.png',
		time: '2025-05-06 11:05 AM',
		file: '/screenshot.png',
	},
	{
		id: 4,
		type: 'status',
		user: 'Bob',
		message: 'Marked as In Progress',
		time: '2025-05-06 1:15 PM',
		status: 'In Progress',
	},
	{
		id: 5,
		type: 'status',
		user: 'Bob',
		message: 'Marked as Fixed',
		time: '2025-05-07 9:45 AM',
		status: 'Fixed',
	},
];

export const TIMELINE_ATTACHMENT: Attachment[] = [
	{
		type: 'image',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk3OPGuPxoO8iHaIkCiWpq1ECy115Xq0ODA&s',
		size: 1.4,
		name: 'Demo.png',
	},
	{
		type: 'image',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk3OPGuPxoO8iHaIkCiWpq1ECy115Xq0ODA&s',
		size: 2,
		name: 'Filter.png',
	},
	{
		type: 'video',
		src: '/crash-demo.mp4',
		size: 10,
		name: 'Test.mp4',
	},
];

export const ACTION_LIST: ActionItem[] = [
	{ name: 'Edit', icon: Edit3 },
	{ name: 'Assign to', icon: UserPlus },
	{ name: 'Monitor', icon: Eye },
	{ name: 'Stick', icon: Pin },
	{ name: 'Clone', icon: Copy },
];

export const META_INFO: MetaInfo[] = [
	{ label: 'Reporter', value: 'Alice' },
	{ label: 'Assigned To', value: 'Jack' },
	{ label: 'Priority', value: 'High', className: 'text-yellow-600' },
	{ label: 'Severity', value: 'Major', className: 'text-red-600' },
	{ label: 'Reproducibility', value: 'Always' },
	{ label: 'Resolution', value: 'Reopened' },
];

export const ASSIGN_OPTION: string[] = [
	'Myself',
	'Reporter',
	'Administrator',
	'UserA',
	'UserB',
	'UserC',
];

export const STATUS_OPTION: string[] = [
	'New',
	'Confirmed',
	'Assigned',
	'Resolved',
	'Feedback',
];
