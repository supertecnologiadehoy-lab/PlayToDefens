import fs from 'fs';

const content = fs.readFileSync('src/data/gamesData.ts', 'utf8');

const startIdx = content.indexOf('export const FORTIOS_QUESTIONS = [');
const endIdx = content.indexOf('];\n\nexport const PACKET_PUZZLE_CHALLENGES');

if (startIdx === -1 || endIdx === -1) {
    console.log("Could not find FORTIOS_QUESTIONS boundaries");
    process.exit(1);
}

const before = content.slice(0, startIdx);
const after = content.slice(endIdx + 3); // skip `];\n`

const imports = `import { FORTIOS_QUESTIONS as Q1 } from './fortiosQuestions';
import { FORTIOS_QUESTIONS_2 as Q2 } from './fortiosQuestions2';
import { FORTIOS_QUESTIONS_3 as Q3 } from './fortiosQuestions3';
import { FORTIOS_QUESTIONS_4 as Q4 } from './fortiosQuestions4';
`;

const newArr = `export const FORTIOS_QUESTIONS = [...Q1, ...Q2, ...Q3, ...Q4];\n\n`;

const finalContent = imports + "\n" + before + newArr + "export const PACKET_PUZZLE_CHALLENGES" + after;

fs.writeFileSync('src/data/gamesData.ts', finalContent);
console.log("Updated gamesData.ts successfully");
