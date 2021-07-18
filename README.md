# Paste Special Plugin - Joplin

This plugin is for pasting formatted text and provide sub-menu options inside it to paste from user clipboard. The sub-menu contains options for file formats like Paste Excel or CSV as Markdown table and Pasting HTML as Markdown. This project was built under GSoC'21.

## Usage

### Paste CSV as Table
![Screen-Recording-2021-07-05-at-3](https://user-images.githubusercontent.com/35633575/124400631-7a55fb00-dd41-11eb-8ac0-dc1503438a6c.gif)

## Paste HTML as Markdown
![Screen-Recording-2021-07-18-at-7](https://user-images.githubusercontent.com/35633575/126070214-bbede7db-991e-420a-9ebd-72becef2e947.gif)

## Building the plugin

The plugin is built using Webpack, which creates the compiled code in `/dist`. A JPL archive will also be created at the root, which can use to distribute the plugin.

To build the plugin, simply run `npm run dist`.

The project is setup to use TypeScript, although you can change the configuration to use plain JavaScript.

## Testing the plugin

To test the plugin, simply run `npm test`.

This project is setup to use Jest, for testing purposes.

## Updating the plugin framework

To update the plugin framework, run `npm run update`.

In general this command tries to do the right thing - in particular it's going to merge the changes in package.json and .gitignore instead of overwriting. It will also leave "/src" as well as README.md untouched.

The file that may cause problem is "webpack.config.js" because it's going to be overwritten. For that reason, if you want to change it, consider creating a separate JavaScript file and include it in webpack.config.js. That way, when you update, you only have to restore the line that include your file.

## Mentors

- Helmut K. C. Tessarek (@tessus)
- Stefan (@PackElend)

## Development Dependencies

- [Papa Parse](https://www.papaparse.com/)
