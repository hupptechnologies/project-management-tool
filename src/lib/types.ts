import { ReactElement } from 'react';

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
