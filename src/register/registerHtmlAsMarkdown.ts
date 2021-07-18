import joplin from 'api';
import Turndown from "../../node_modules/turndown/lib/turndown.es";
import { gfm } from '../../node_modules/turndown-plugin-gfm/lib/turndown-plugin-gfm.cjs';

export default async function registerCsvAsTable(): Promise<void> {
    await joplin.commands.register({
        name: 'pasteHtmlAsMarkdown',
        label: 'HTML as Markdown',
        execute: async () => {
            let html: string = await (joplin as any).clipboard.readHtml();
            // if clipboard data, not found
            if (!html?.length) return;
            const turndownService = new Turndown();
            turndownService.use(gfm);
            const pasteHtmlAsMarkdown = turndownService.turndown(html.toString());
            await joplin.commands.execute("insertText", pasteHtmlAsMarkdown);
            await joplin.commands.execute('editor.focus');
        }
    });
}