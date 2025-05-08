export default function ReproduceSteps() {
	return (
		<section>
			<h3 className="text-[14px] font-semibold text-gray-900 mb-2">
				🧪 Steps to Reproduce
			</h3>
			<ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 pl-4">
				{['Click the login button', 'Observe crash on redirect'].map(
					(step, idx) => (
						<li
							key={idx}
							className="text-[8px] font-semibold text-gray-900 mb-2"
						>
							{step}
						</li>
					)
				)}
			</ol>
		</section>
	);
}
