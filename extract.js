const fs = require('fs');
const content = fs.readFileSync('src/data/gamesData.ts', 'utf8');
const start = content.indexOf('export const FORTIOS_QUESTIONS = [');
const end = content.indexOf('];\n\nexport const PACKET_PUZZLE_CHALLENGES');
const chunk = content.slice(start, end + 1).replace('export const FORTIOS_QUESTIONS = ', 'module.exports = ');
fs.writeFileSync('extracted.cjs', chunk);

const q = require('./extracted.cjs');
let count = 0;
q.forEach(question => {
    // console.log(question.scenario)
    if (question.scenario.includes('Choose')) {
        console.log("ID:", question.id, "Scenario:", question.scenario);
        count++;
    }
});
console.log(count, "questions explicitly with Choose");
