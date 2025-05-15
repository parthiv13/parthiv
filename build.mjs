// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           Parthiv K'),
	handle: chalk.white('parthiv13'),
	shorthandle: chalk.white('parthiv'),
	work: chalk.white('Software Engineer at ') + chalk.cyan('IDeaS'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('kparthiv13'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~parthiv13'),
	github: chalk.gray('https://github.com/') + chalk.green('parthiv13'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('parthiv-kativarapu'),
	web: chalk.cyan('https://parthiv.xyz'),
	npx: `${chalk.red('npx')} ${chalk.white('parthiv-card')}`,
	labelWork: chalk.white.bold('    Work:'),
	labelTwitter: chalk.white.bold(' Twitter:'),
	labelnpm: chalk.white.bold('     npm:'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	labelWeb: chalk.white.bold('     Web:'),
	labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline + // data.labelWork + data.work
	twittering +
	newline + // data.labelTwitter + data.twitter
	npming +
	newline + // data.labelnpm + data.npm
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	webing +
	newline +
	newline + // data.labelWeb + data.web
	carding; // data.labelCard + data.npx

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);
