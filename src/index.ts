import joplin from 'api';
import registerCsvAsTable from './register/registerCsvAsTable';
import registerHtmlAsMarkdown from './register/registerHtmlAsMarkdown';

joplin.plugins.register({
	onStart: async function() {
		console.info('Paste Special plugin started!');
		
		// Register the menu items of Paste Special with views here
		await registerHtmlAsMarkdown();
		await registerCsvAsTable(); // Add all views in this
	}
});