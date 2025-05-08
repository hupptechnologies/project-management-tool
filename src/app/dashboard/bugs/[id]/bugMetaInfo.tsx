import { META_INFO } from '@/constants';

export default function BugMetaInfo() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
			{META_INFO.map(({ label, value, className = 'text-gray-800' }, idx) => (
				<div key={idx}>
					<p className="text-gray-500 text-[10px]">{label}</p>
					<p className={`font-medium text-[8px] ${className}`}>{value}</p>
				</div>
			))}
		</div>
	);
}
