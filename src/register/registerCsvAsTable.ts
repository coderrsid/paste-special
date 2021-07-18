import joplin from 'api';
import { MenuItemLocation } from 'api/types';
import csvAsTable from '../utils/csvAsTable/csvAsTable';

export default async function registerCsvAsTable(): Promise<void> {
	// Respective command for main button
	await joplin.commands.register({
		name: 'pasteCsvAsTable',
		label: 'CSV as Table',
		execute: async () => {
			let csv: string = await (joplin as any).clipboard.readText();
			// if clipboard data, not found
			if (!csv?.length) return;
			csv = csv.trim();
			const pasteCsvAsTable = await csvAsTable(csv);
			await joplin.commands.execute("insertText", pasteCsvAsTable);
			await joplin.commands.execute('editor.focus');
		}
	});

	// For creating menu items under Edit Menubar item and Folder Context menu.
	await joplin.views.menus.create('pasteSpecial', 'Paste Special', [
		{
			label: "CSV as Table",
			commandName: "pasteCsvAsTable"
		},
		{
			label: "HTML as Markdown",
			commandName: "pasteHtmlAsMarkdown"
		}
	], MenuItemLocation.Edit);
}