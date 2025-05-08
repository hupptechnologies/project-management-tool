export default function BugDescription() {
	return (
		<section>
			<h3 className="text-[14px] font-semibold text-gray-900 mb-2">
				📝 Description
			</h3>
			<p className="text-[8px] text-gray-700 leading-relaxed">
				This bug causes the app to crash upon attempting to log in due to a
				missing <code className="bg-gray-100 px-1 rounded">authToken</code>. It
				appears to be related to recent middleware changes.
			</p>
		</section>
	);
}
