import Board from '@/components/Board';

export default function Home() {
	return (
		<main className="min-h-screen bg-gray-50">
			<h1 className="text-3xl font-bold p-4">Kanban Project Manager</h1>
			<Board />
		</main>
	);
}
