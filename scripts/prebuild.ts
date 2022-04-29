const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

let isProduction = false;
if (process.argv.length === 3) {
  isProduction = process.argv[2] === 'prod';
}

const envDirectory = path.join(__dirname, '../src/environments/');
const templateDirectory = path.join(envDirectory, 'templates/');
const targetEnvFile = isProduction ? 'environment.prod.ts' : 'environment.ts';

const overwriteValues = {
  TOTAL_POPULATION_CHART_API_KEY: process.env['TOTAL_POPULATION_CHART_API_KEY'],
};

const environmentTemplate = fs.readFileSync(path.join(templateDirectory, targetEnvFile), { encoding: 'utf-8' });
const output = ejs.render(environmentTemplate, overwriteValues);
fs.writeFileSync(path.join(envDirectory, targetEnvFile), output);

process.exit(0);
