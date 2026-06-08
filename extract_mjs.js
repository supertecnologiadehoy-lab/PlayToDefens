import fs from 'fs';
const content = fs.readFileSync('src/data/gamesData.ts', 'utf8');
const start = content.indexOf('export const FORTIOS_QUESTIONS = [');
const end = content.indexOf('];\n\nexport const PACKET_PUZZLE_CHALLENGES');
const chunk = content.slice(start, end + 1).replace('export const FORTIOS_QUESTIONS = ', 'export const FORTIOS_QUESTIONS_RAW = ');
fs.writeFileSync('extracted.ts', chunk);

const dataContent = fs.readFileSync('extracted.ts', 'utf8');
console.log("length of dataContent is", dataContent.length);
