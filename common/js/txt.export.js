/**
 * Read items of json postman
 * eg��exportTxt("api�ӿ��ĵ�.md", "�����ҵ�����")
 * @param name �ļ���
 * @param data �ļ�����
 */
function exportTxt(name, data) {
	const urlObject = window.URL || window.webkitURL || window;
	const export_blob = new Blob([data]);

	const save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
	save_link.href = urlObject.createObjectURL(export_blob);
	save_link.download = name;

	const ev = document.createEvent("MouseEvents");
	ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	save_link.dispatchEvent(ev);
}
