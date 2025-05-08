// lib/store.ts
import { create } from 'zustand';
import { PROJECT_LIST } from '@/constants';

type UIState = {
	showProjectPanel: boolean;
	setShowProjectPanel: (val: boolean) => void;
	toggleProjectPanel: () => void;

	selectedProject: (typeof PROJECT_LIST)[0] | null;
	setSelectedProject: (project: (typeof PROJECT_LIST)[0] | null) => void;
};

export const useUIStore = create<UIState>((set) => ({
	showProjectPanel: false,
	setShowProjectPanel: (val) => set({ showProjectPanel: val }),
	toggleProjectPanel: () =>
		set((state) => ({ showProjectPanel: !state.showProjectPanel })),

	selectedProject: null,
	setSelectedProject: (project) => set({ selectedProject: project }),
}));
