import { ReactElement } from 'react';
import { LucideIcon } from 'lucide-react';

export type Task = {
	id: string;
	title: string;
	description?: string;
};

export type Column = {
	id: string;
	title: string;
	tasks: Task[];
};

export interface NavItem {
	icon: ReactElement;
	label: string;
	href: string;
}

export interface ProjectItem {
	label: string;
	href: string;
	color: string;
}

export interface Project {
	id: string;
	name: string;
	description: string;
	color: string;
}

export interface ProjectFilter {
	label: string;
	count: number;
}

export interface COLUMN {
	label: string;
	value: string;
}

export interface BugTimeline {
	id: number;
	type: string;
	user: string;
	message: string;
	time: string;
	file?: string;
	status?: string;
}

export interface Attachment {
	src: string;
	type: string;
	size: number;
	name: string;
}

export interface ActionItem {
	name: string;
	icon: LucideIcon;
}

export interface MetaInfo {
	label: string;
	value: string;
	className?: string;
}
