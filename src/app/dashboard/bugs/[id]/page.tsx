'use client';

import { useRouter } from 'next/navigation';
import TabView from '../../kanban/tab';
import { TIMELINE_ATTACHMENT } from '@/constants';
import BugDetailHeader from './header';
import BugMetaInfo from './bugMetaInfo';
import ReproduceSteps from './reproduceSteps';
import BugDescription from './bugDescription';
import BugAttachments from './bugAttachments';

export default function BugDetailPage({ params }: { params: { id: string } }) {
	const router = useRouter();

	return (
		<div className="mx-auto p-2 bg-white space-y-4 mt-1">
			<BugDetailHeader id={params.id} onBack={() => router.back()} />
			<BugMetaInfo />
			<hr className="border-gray-200" />
			<ReproduceSteps />
			<hr className="border-gray-200" />
			<BugDescription />
			<hr className="border-gray-200" />
			<BugAttachments attachments={TIMELINE_ATTACHMENT} />
			<TabView />
		</div>
	);
}
